import { Router, Redirect } from '@reach/router'

import { useAuth } from 'src/utils/useAuth'
import { withProtectNotLogin, withProtectWithLogin } from 'src/utils/withProtect'

import { Root } from 'src/pages/Root'
import { PageIndex } from 'src/pages/PageIndex'
import { PageLogin } from 'src/pages/PageLogin'
import { PageOnBoarding } from 'src/pages/PageOnBoarding'
import { PagePrivacy } from 'src/pages/PagePrivacy'
import { PageTerms } from 'src/pages/PageTerms'
import { UnInstallExt } from 'src/pages/UnInstallExt'
import { Page404 } from 'src/pages/Page404'

const PageOnBoardingProtected = withProtectNotLogin(PageOnBoarding)
const PageLoginProtected = withProtectWithLogin(PageLogin)

export function App() {
  const [dataLoaded] = useAuth()

  return dataLoaded ? (
    <Router>
      <Root path="/">
        <PageIndex path="/" />
        <PageOnBoardingProtected path="/onboarding" />
        <PageLoginProtected path="/login" />
        <PagePrivacy path="/privacy_policy" />
        <PageTerms path="/terms_of_use" />
        <UnInstallExt path="/uninstall_ext" />

        <Page404 path="/404" />
        <Redirect from="*" to="/404" noThrow />
      </Root>
    </Router>
  ) : null
}
