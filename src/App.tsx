import { Router, Redirect } from '@reach/router'
import { useAuth } from './utils/useAuth'
import { withProtect } from './utils/withProtect'
import { PageIndex } from './pages/PageIndex'
import { PageLogin } from './pages/PageLogin'
import { PageOnBoarding } from './pages/PageOnBoarding'
import { Page404 } from './pages/Page404'

const PageOnBoardingProtected = withProtect(PageOnBoarding)

export function App() {
  const dataLoaded = useAuth()

  return dataLoaded ? (
    <Router>
      <PageIndex path="/" />
      <PageOnBoardingProtected path="/onboarding" />
      <PageLogin path="/login" />
      <Page404 path="/404" />
      <Redirect from="*" to="/404" noThrow />
    </Router>
  ) : null
}
