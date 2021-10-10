import { useEffect } from 'react'
import { UserStore } from 'src/store/UserStore'

export function useMoodRates() {
  useEffect(() => {
    ;(async () => {
      await UserStore.fetchMoodRates()
    })()
  }, [])

  return { moodRates: UserStore.moodRates }
}
