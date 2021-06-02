import { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import cookie from 'js-cookie'
import UserStore from './store/UserStore'
import { sendMessageToExt } from './utils/config'
import { ACTION_LOGIN } from './utils/actions'
import { PageIndex } from './pages/PageIndex'
import { PageLogin } from './pages/PageLogin'
import { PageOnBoarding } from './pages/PageOnBoarding'

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
      <PageOnBoarding path="/onboarding" />
      <PageLogin path="/login" />
    </Router>
  ) : null
}
