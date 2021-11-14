import { GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '@components/Layout'
import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: await serverSideTranslations(locale!),
})

const ServerErrorPage = ({ statusCode }: { statusCode: number }) => {
  const { t } = useTranslation(['page-errors'])

  return (
    <Layout>
      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          🍄 {t('somethingWentWrong')}
        </Typography>
        <Typography variant="body1" className="mb-6">
          {t('errorMessage')}
        </Typography>
        <Typography variant="body1" className="mb-6">
          <span className="bg-gray-300 inline-block">
            ERRORCODE: {statusCode}
          </span>
        </Typography>
        <Button
          color="primary"
          variant="contained"
          href="/"
          title="Go back home"
        >
          {t('goHome')}
        </Button>
      </div>
    </Layout>
  )
}

export default ServerErrorPage
