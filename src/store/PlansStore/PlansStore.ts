import { makeAutoObservable, runInAction } from 'mobx'

import { fetcher } from 'src/utils/fetcher'
import { UserStore } from 'src/store/UserStore'

import type { Plan } from './types'

export class PlansStore {
  loading = false

  plans: Plan[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPlans() {
    this.loading = true

    const { data } = await fetcher.get<Plan[]>(`/plans`, {
      headers: { AUTHORIZATION: UserStore.token },
    })

    runInAction(() => {
      this.loading = false
      this.plans = data
    })
  }

  async cancel() {
    await fetcher.post(`/subscriptions/cancel`, null, {
      headers: { AUTHORIZATION: UserStore.token },
    })

    await UserStore.fetchUser()
    await this.fetchPlans()
  }

  async enableTrial() {
    await fetcher.post(`/users/trials`, null, {
      headers: { AUTHORIZATION: UserStore.token },
    })

    await UserStore.fetchUser()
    await this.fetchPlans()
  }

  selectPlanBy(id: string) {
    return this.plans.find((plan) => plan.external_id === id)
  }
}
