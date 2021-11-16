import { useState, useEffect, ChangeEventHandler } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import get from 'lodash/get'

import { Layout } from '@components/Layout'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@ui/FormField'
import { SearchIcon } from '@ui/icon/Search'
import { Typography } from '@ui/Typography'
import { PlantCollection } from '@components/PlantCollection'

import { useInfinitePlantSearch } from '@api/query/useInfinitePlantSearch'
import { Button } from '@ui/Button'
import clsx from 'clsx'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: await serverSideTranslations(locale!),
})

const Search = () => {
  const { t } = useTranslation(['page-search'])
  const [term, setTerm] = useState('')

  const searchTerm = useDebounce(term, 500)

  const { data, status, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfinitePlantSearch(
      { term: searchTerm },
      { enabled: searchTerm.trim().length > 1, staleTime: Infinity }
    )

  const updateTerm: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTerm(e.currentTarget.value)

  const emptyResults =
    status === 'success' && get(data, 'pages[0].length', 0) === 0

  const results: Plant[] = data?.pages != null ? data.pages.flat() : []

  return (
    <Layout>
      <main className="pt-16 text-center">
        <div className="max-w-5xl mx-auto mb-6">
          <FormControl fullWidth className="" variant="outlined">
            <InputLabel htmlFor="search-term-field">{t('term')}</InputLabel>
            <OutlinedInput
              id="search-term-field"
              value={term}
              onChange={updateTerm}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>
        </div>
        <div>
          {emptyResults ? (
            <Typography variant="body1">{t('notFound', { term })}</Typography>
          ) : (
            <PlantCollection plants={results} variant="square" />
          )}
        </div>
        {hasNextPage && (
          <div className="text-center p4">
            <Button
              variant="outlined"
              disabled={isFetchingNextPage}
              className={clsx({ 'animate-pulse': isFetchingNextPage })}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? t('loading') : t('loadMore')}
            </Button>
          </div>
        )}
      </main>
    </Layout>
  )
}

function useDebounce<T>(value: T, wait = 0) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Update the inner state after <wait> ms
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, wait)

    // Clear timeout in case a new value is received
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])

  return debouncedValue
}

export default Search
