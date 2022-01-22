import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getSession, useSession } from '@auth/client'
import { Button, Typography } from '@material-ui/core'

import { Layout } from '@components/Layout'
import AccessDenied from '@components/AccessDenied'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const i18n = await serverSideTranslations(context.locale!)

  // validate session
  if (session === null) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session, ...i18n },
  }
}

function PremiumPage() {
  const { data: session, status } = useSession()
  const [image, setImage] = useState<string | null>(null)
  const [refetchCounter, refetch] = useState(0)
  const { t } = useTranslation(['page-premium'])

  useEffect(() => {
    fetch('/api/premium')
      .then((response) => response.json())
      .then(({ data }) => setImage(data))
  }, [refetchCounter])

  if (status === 'loading') return null

  // denied
  if (session === null) return <AccessDenied />

  // loggued
  return (
    <Layout title="Premium content">
      <div className="text-center">
        <Typography variant="h2">
          {t('welcome', { name: session.user?.name })}
        </Typography>
        <Typography variant="body2" className="mt-1">
          {t('hereIsYourPremiumContent')}
        </Typography>
        <div className="max-w-lg mx-auto text-center my-8">
          {image && (
            <img key={image} src={image} alt="Random fox" className="rounded" />
          )}
        </div>
        <Button variant="outlined" onClick={() => refetch((c) => ++c)}>
          {t('more')}
        </Button>
      </div>
    </Layout>
  )
}

export default PremiumPage
