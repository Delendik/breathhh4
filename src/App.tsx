import { useEffect, useState } from 'react'
import { Router, Redirect } from '@reach/router'
import cookie from 'js-cookie'
import UserStore from './store/UserStore'
import { sendMessageToExt } from './utils/config'
import { withProtect } from './utils/withProtect'
import { ACTION_LOGIN } from './utils/actions'
import { PageIndex } from './pages/PageIndex'
import { PageLogin } from './pages/PageLogin'
import { PageOnBoarding } from './pages/PageOnBoarding'
import { Page404 } from './pages/Page404'

const PageOnBoardingProtected = withProtect(PageOnBoarding)

export function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const AUTHORIZATION = cookie.get('token')

      if (AUTHORIZATION) {
        await UserStore.setAndFetchUser(AUTHORIZATION)
        sendMessageToExt(ACTION_LOGIN)
      }

      setDataLoaded(true)
    })()
  }, [])

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
