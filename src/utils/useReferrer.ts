import { useEffect } from 'react'

import { UserStore } from 'src/store/UserStore'

export const useReferrer = () => {
  useEffect(() => {
    ;(async () => {
      await UserStore.sendReferrer()
    })()
  }, [])
}
