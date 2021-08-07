import { Router, Redirect } from '@reach/router'

import { useAuth } from 'src/utils/useAuth'
import { withProtectNotLogin, withProtectWithLogin } from 'src/utils/withProtect'

import { Root } from 'src/pages/Root'
import { PageIndex } from 'src/pages/PageIndex'
import { PageLogin } from 'src/pages/PageLogin'
import { PageOnBoarding } from 'src/pages/PageOnBoarding'
import { PageDashboard } from 'src/pages/PageDashboard'
import { PageSubscription } from 'src/pages/PageSubscription'
import { PageAccount } from 'src/pages/PageAccount'
import { PagePrivacy } from 'src/pages/PagePrivacy'
import { PageTerms } from 'src/pages/PageTerms'
import { PageUninstall } from 'src/pages/PageUninstall'
import { Page404 } from 'src/pages/Page404'

const PageOnBoardingProtected = withProtectNotLogin(PageOnBoarding)
const PageDashboardProtected = withProtectNotLogin(PageDashboard)
const PageSubscriptionProtected = withProtectNotLogin(PageSubscription)
const PageAccountProtected = withProtectNotLogin(PageAccount)
const PageUninstallProtected = withProtectNotLogin(PageUninstall)

const PageLoginProtected = withProtectWithLogin(PageLogin)

export function App() {
  const [dataLoaded] = useAuth()

  return dataLoaded ? (
    <Router>
      <Root path="/">
        <PageIndex path="/" />
        <PageOnBoardingProtected path="/onboarding" />
        <PageLoginProtected path="/login" />
        <PageDashboardProtected path="/dashboard" />
        <PageSubscriptionProtected path="/subscription" />
        <PageAccountProtected path="/account" />
        <PagePrivacy path="/privacy_policy" />
        <PageTerms path="/terms_of_use" />
        <PageUninstallProtected path="/uninstall_ext" />

        <Page404 path="/404" />
        <Redirect from="*" to="/404" noThrow />
      </Root>
    </Router>
  ) : null
}
