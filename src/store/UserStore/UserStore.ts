import { makeAutoObservable, runInAction } from 'mobx'
import dayjs from 'dayjs'
import cookie from 'js-cookie'

import { sendMessageToExt } from 'src/utils/config'
import { fetcher } from 'src/utils/fetcher'
import { ACTION_LOGOUT } from 'src/utils/actions'
import { Referrer } from 'src/utils/localStore'

import { OnboardingState, IUser, IDeleteFeedback, IReferrer, IMoodRates } from './types'

const today = () => dayjs().format(`YYYY-MM-DD`)

export class UserStore {
  token = ``

  user: null | IUser = null

  moodRates: IMoodRates[] = []

  loadingFeedback = false

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
  }

  logout() {
    cookie.remove(`token`, { path: `/`, domain: `.breathhh.app` })
    this.user = null
    sendMessageToExt(ACTION_LOGOUT)
  }

  async fetchUser() {
    const { data } = await fetcher.get<IUser>(`/profile?date=${today()}`, {
      headers: { AUTHORIZATION: this.token },
    })

    runInAction(() => {
      this.user = data
      this.sendReferrer()
    })
  }

  async setAndFetchUser(token: string) {
    this.setToken(token)
    await this.fetchUser()
  }

  async deleteMyAccount() {
    await fetcher.delete(`/profile`, { headers: { AUTHORIZATION: this.token } })
    this.logout()
  }

  async patchCategories(id: number, limit: number) {
    await fetcher.patch(
      `/users/categories/${id}`,
      { limit },
      { headers: { AUTHORIZATION: this.token } }
    )
  }

  async sendDeleteFact() {
    await fetcher.delete(`/users/extension`, { headers: { AUTHORIZATION: this.token } })
  }

  async sendDeleteFeedback(data: IDeleteFeedback) {
    this.loadingFeedback = true
    await fetcher.post(`/users/feedbacks`, data, { headers: { AUTHORIZATION: this.token } })

    runInAction(() => {
      this.loadingFeedback = false
    })
  }

  async sendReferrer() {
    let data = {
      referrer: document.referrer,
      entry_url: window.location.href,
    }

    if (this.token) {
      try {
        const refLink = Referrer.getRef()

        if (refLink) {
          data = JSON.parse(refLink) as IReferrer
        }

        await fetcher.post(`/users/analytics`, data, { headers: { AUTHORIZATION: this.token } })
        Referrer.clearRef()
      } catch (error) {
        console.log(`>> useReferrer`, error)
      }
    } else {
      Referrer.safeRef(JSON.stringify(data))
    }
  }

  async fetchMoodRates() {
    try {
      const { data } = await fetcher.get<IMoodRates[]>(`/moods`, {
        headers: { AUTHORIZATION: this.token },
      })

      runInAction(() => {
        this.moodRates = data
      })
    } catch (error) {
      console.log(`>> fetchMoodRates`, error)
    }
  }

  async completeOnboarding() {
    try {
      const { data } = await fetcher.post(`/users/onboardings`, null, {
        headers: { AUTHORIZATION: this.token },
      })

      console.log(data)
    } catch (error) {
      console.log(`>> onboarding`, error)
    }
  }

  get avatar() {
    return this.user?.picture || undefined
  }

  get engList() {
    return this.user?.engagement || []
  }

  get showOnboarding() {
    return this.user?.onboarding_state === OnboardingState.INITIAL
  }

  get showCompleted() {
    return this.user?.onboarding_state === OnboardingState.COMPLETED
  }

  get isOnActiveSubscription() {
    return this.user?.subscription_state === `subscription_active`
  }

  get selectUserActiveSubscription() {
    return this.user?.active_subscription
  }

  get isOnActiveTrial() {
    return this.user?.subscription_state === `subscription_trial`
  }
}
