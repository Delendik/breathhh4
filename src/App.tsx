import { Router, Redirect } from '@reach/router'

import { useAuth } from 'src/utils/useAuth'
import {
  withLoginIfNotLoggedIn,
  withOnboardingRedirectIfLoggedIn,
  withAccountRedirectIfLoggedIn,
  withOnboardingProtection,
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
import { PageDiary } from 'src/pages/PageDiary'
import { PageAbout } from 'src/pages/PageAbout'
import { PageFaq } from 'src/pages/PageFaq'
import { PageHowItWorks } from 'src/pages/PageHowItWorks'
import { PagePartnership } from 'src/pages/PagePartnership'

const PageIndexProtected = withAccountRedirectIfLoggedIn(PageIndex)

const PageLoginProtected = withOnboardingRedirectIfLoggedIn(PageLogin)

const PageOnBoardingProtected = withOnboardingProtection(withLoginIfNotLoggedIn(PageOnBoarding))
const PageDashboardProtected = withLoginIfNotLoggedIn(PageDashboard)
const PageSubscriptionProtected = withLoginIfNotLoggedIn(PageSubscription)
const PageAccountProtected = withLoginIfNotLoggedIn(PageAccount)
const PageUninstallProtected = withLoginIfNotLoggedIn(PageUninstall)
const PageDiaryProtected = withLoginIfNotLoggedIn(PageDiary)

export function App() {
  const [dataLoaded] = useAuth()
  // window.location.href =
  //   'https://chrome.google.com/webstore/detail/breathhh-mental-rejuvenat/niipedbmjiopjpmjcpigiflabghcckeo'
  return dataLoaded ? (
    <Router>
      <Root path="/">
        <PageIndexProtected path="/" />
        <PageOnBoardingProtected path="/onboarding" />
        <PageLoginProtected path="/login" />
        <PageDashboardProtected path="/dashboard" />
        <PageDiaryProtected path="/diary" />
        <PageSubscriptionProtected path="/subscription" />
        <PageAccountProtected path="/account" />
        <PagePrivacy path="/privacy_policy" />
        <PageTerms path="/terms_of_use" />
        <PageUninstallProtected path="/uninstall_ext" />
        <PageContact path="/contacts" />
        <PageAbout path="/about" />
        <PageFaq path="/faq" />
        <PageHowItWorks path="/how-it-works" />
        <PagePartnership path="/partnership" />
        <Page404 path="/404" />
        <Redirect
          from="/extension"
          to="https://chrome.google.com/webstore/detail/breathhh-mental-rejuvenat/niipedbmjiopjpmjcpigiflabghcckeo"
          noThrow
        />
        <Redirect from="*" to="/404" noThrow />
      </Root>
    </Router>
  ) : null
}
