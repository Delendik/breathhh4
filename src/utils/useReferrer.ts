import { useEffect } from 'react'
import { useLocation } from '@reach/router'
// import qs from 'query-string'

import { UserStore } from 'src/store/UserStore'
import { Referrer } from 'src/utils/localStore'

export const useReferrer = () => {
  const location = useLocation()

  // https://breathhh.app/?ref=producthunt (и че с ними делать?)
  // const { ref } = qs.parse(location.search)

  useEffect(() => {
    const start = async () => {
      const refLink = Referrer.getRef()

      if (refLink) {
        try {
          const data = JSON.parse(refLink)
          await UserStore.sendReferrer(data)
        } catch (error) {
          console.log('>> useReferrer', error)
        }

        Referrer.clearRef()
      } else if (document.referrer) {
        const json = JSON.stringify({
          referrer: document.referrer,
          entry_url: location.href,
        })

        Referrer.safeRef(json)
      }
    }

    start()
  }, [])
}
