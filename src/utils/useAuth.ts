import { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useNavigate } from '@reach/router'
import { UserStore } from '../store/UserStore'
import { sendMessageToExt, chromeExtId } from '../utils/config'
import { ACTION_LOGIN, ACTION_LOGOUT } from '../utils/actions'

export const useAuth = () => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const navigate = useNavigate()

  // INFO: Логин
  useEffect(() => {
    ;(async () => {
      const AUTHORIZATION = cookie.get('token')

      if (AUTHORIZATION) {
        try {
          await UserStore.setAndFetchUser(AUTHORIZATION)
          sendMessageToExt(ACTION_LOGIN)
        } catch {}
      }

      setDataLoaded(true)
    })()
  }, [])

  // INFO: Разлогин
  useEffect(() => {
    const port = chrome.runtime.connect(chromeExtId, { name: 'web' })

    const handleMessage = (event: any) => {
      console.log('event', event)
    }

    port.onMessage.addListener(handleMessage)

    return () => {
      port.onMessage.removeListener(handleMessage)
      port.disconnect()
    }
  }, [])

  // INFO: Разлогин
  // useEffect(() => {
  //   const handleLogout = (event: any) => {
  //     console.log(event)

  //     if (event.type === ACTION_LOGOUT) {
  //       UserStore.logout()
  //       navigate('/login', { replace: true })
  //     }
  //   }

  //   chrome.runtime.onMessage.addListener(handleLogout)

  //   return () => {
  //     chrome.runtime.onMessage.removeListener(handleLogout)
  //   }
  // }, [])

  return [dataLoaded]
}
