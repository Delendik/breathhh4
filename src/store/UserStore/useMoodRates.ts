import { useEffect } from 'react'
import { UserStore } from 'src/store/UserStore'

export function useMoodRates() {
  useEffect(() => {
    ;(async () => {
      if (UserStore.moodRates.length <= 0) {
        await UserStore.fetchMoodRates()
      }
    })()
  }, [])

  return { moodRates: UserStore.moodRates }
}
