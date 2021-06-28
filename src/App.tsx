import { Router, Redirect } from '@reach/router'
import { useAuth } from './utils/useAuth'
import { withProtectNotLogin, withProtectWithLogin } from './utils/withProtect'
import { PageIndex } from './pages/PageIndex'
import { PageLogin } from './pages/PageLogin'
import { PageOnBoarding } from './pages/PageOnBoarding'
import { PagePrivacy } from './pages/PagePrivacy'
import { PageTerms } from './pages/PageTerms'
import { Page404 } from './pages/Page404'

const PageOnBoardingProtected = withProtectNotLogin(PageOnBoarding)
const PageLoginProtected = withProtectWithLogin(PageLogin)

export function App() {
  const [dataLoaded] = useAuth()

  return dataLoaded ? (
    <Router>
      <PageIndex path="/" />
      <PageOnBoardingProtected path="/onboarding" />
      <PageLoginProtected path="/login" />
      <PagePrivacy path="/privacy_policy" />
      <PageTerms path="/terms_of_use" />

      <Page404 path="/404" />
      <Redirect from="*" to="/404" noThrow />
    </Router>
  ) : null
}
