import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from '@auth/client'
import { useTranslation } from 'next-i18next'

import { Grid } from '@ui/Grid'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'

const TopArea = () => {
  const { locales, locale } = useRouter()

  if (locales === undefined || locale === undefined) {
    return null
  }

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <LoginLogout />
      </Grid>
      <Grid item>
        <LocaleOptions />
      </Grid>
    </Grid>
  )
}

const LoginLogout = () => {
  const { data: session, status } = useSession()
  const { t } = useTranslation(['common'])

  if (status === 'loading') return null

  if (!session) return <Button onClick={() => signIn()}>{t('signIn')}</Button>

  return (
    <>
      <span>{session.user?.name}</span>
      <Button onClick={() => signOut()}>{t('signOut')}</Button>
    </>
  )
}

const LocaleOptions = () => {
  const { locales, locale } = useRouter()

  if (locales === undefined || locale === undefined) return null

  return (
    <>
      <Typography variant="body2" component="span" className="pr-3">
        Language:
      </Typography>
      {locales.map((loc) => (
        <form
          action="/api/language"
          method="POST"
          key={loc}
          className="inline-block"
        >
          <input name="preferredLocale" value={loc} type="hidden" />
          <Button
            variant={loc === locale ? 'outlined' : 'text'}
            className="ml-1"
            type="submit"
          >
            {loc}
          </Button>
        </form>
      ))}
    </>
  )
}

export default TopArea
