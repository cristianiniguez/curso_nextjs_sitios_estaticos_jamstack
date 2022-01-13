import { PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { useTranslation } from 'next-i18next'

import { NavBar } from '@ui/NavBar'
import PreviewModeBanner from './PreviewModeBanner'
import TopArea from './TopArea'
import { Button } from '@ui/Button'

export function Header() {
  const { t } = useTranslation(['common'])

  return (
    <>
      <PreviewModeBanner />
      <div className="px-8 py-3">
        <TopArea />
      </div>
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="🌿 Plantpedia">
          <div>
            <NavLink href="/top-stories">{t('topStories')}</NavLink>
          </div>
        </NavBar>
      </div>
    </>
  )
}

function NavLink({ children, ...linkProps }: PropsWithChildren<LinkProps>) {
  return (
    <Link {...linkProps} passHref>
      <Button color="inherit" variant="text" component="a">
        {children}
      </Button>
    </Link>
  )
}
