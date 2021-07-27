import { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { UserStore } from '../store/UserStore'
import { sendMessageToExt } from '../utils/config'
import { ACTION_LOGIN } from '../utils/actions'

export const useAuth = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

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

  return [dataLoaded]
}
