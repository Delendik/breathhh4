import { useEffect, useState } from 'react'
// import cookie from 'js-cookie'

import { UserStore } from 'src/store/UserStore'
import { sendMessageToExt } from 'src/utils/config'
import { ACTION_LOGIN } from 'src/utils/actions'

export const useAuth = () => {
  const [dataLoaded, setDataLoaded] = useState(false)

  // INFO: Логин
  useEffect(() => {
    ;(async () => {
      const AUTHORIZATION = `20s8WkkdEW8o9euFq5s1JQ`
      // const AUTHORIZATION = cookie.get(`token`)

      if (AUTHORIZATION) {
        try {
          await UserStore.setAndFetchUser(AUTHORIZATION)
          sendMessageToExt(ACTION_LOGIN)
        } catch (error) {
          console.error(error)
        }
      }

      setDataLoaded(true)
    })()
  }, [])

  return [dataLoaded]
}
