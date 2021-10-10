import { useEffect } from 'react'

import { PlansStore } from 'src/store/PlansStore'

export function usePlansStore() {
  useEffect(() => {
    ;(async () => {
      if (PlansStore.plans.length <= 0 && !PlansStore.loading) {
        await PlansStore.fetchPlans()
      }
    })()
  }, [])

  return { plans: PlansStore.plans }
}
