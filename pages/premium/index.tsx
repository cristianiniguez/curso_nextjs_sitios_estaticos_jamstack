import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getSession, useSession } from 'next-auth/react'
import { Layout } from '@components/Layout'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

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
    props: { session, ...(await serverSideTranslations(ctx.locale!)) },
  }
}

function PremiumPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return null

  // denied
  if (session === null) return <Layout>Acceso Denegado</Layout>

  // loggued
  return <Layout>Contenido super secreto</Layout>
}

export default PremiumPage
