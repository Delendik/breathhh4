import { Router, Redirect } from '@reach/router'

import { useAuth } from 'src/utils/useAuth'
import {
  withLoginIfNotLoggedIn,
  withOnboardingRedirectIfLoggedIn,
  withAccountRedirectIfLoggedIn,
} from 'src/utils/withProtect'

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
import { PageContact } from 'src/pages/PageContact'
import { Page404 } from 'src/pages/Page404'

const PageIndexProtected = withAccountRedirectIfLoggedIn(PageIndex)

const PageLoginProtected = withOnboardingRedirectIfLoggedIn(PageLogin)

const PageOnBoardingProtected = withLoginIfNotLoggedIn(PageOnBoarding)
const PageDashboardProtected = withLoginIfNotLoggedIn(PageDashboard)
const PageSubscriptionProtected = withLoginIfNotLoggedIn(PageSubscription)
const PageAccountProtected = withLoginIfNotLoggedIn(PageAccount)
const PageUninstallProtected = withLoginIfNotLoggedIn(PageUninstall)

export function App() {
  const [dataLoaded] = useAuth()

  return dataLoaded ? (
    <Router>
      <Root path="/">
        <PageIndexProtected path="/" />
        <PageOnBoardingProtected path="/onboarding" />
        <PageLoginProtected path="/login" />
        <PageDashboardProtected path="/dashboard" />
        <PageSubscriptionProtected path="/subscription" />
        <PageAccountProtected path="/account" />
        <PagePrivacy path="/privacy_policy" />
        <PageTerms path="/terms_of_use" />
        <PageUninstallProtected path="/uninstall_ext" />
        <PageContact path="/contacts" />

        <Page404 path="/404" />
        <Redirect from="*" to="/404" noThrow />
      </Root>
    </Router>
  ) : null
}
