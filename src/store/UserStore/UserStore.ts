import { makeAutoObservable, runInAction } from 'mobx'
import dayjs from 'dayjs'
import cookie from 'js-cookie'

import { sendMessageToExt } from 'src/utils/config'
import { fetcher } from 'src/utils/fetcher'
import { ACTION_LOGOUT } from 'src/utils/actions'
import { Referrer } from 'src/utils/localStore'

import type { IUser, IDeleteFeedback, IReferrer } from './types'

const today = () => dayjs().format(`YYYY-MM-DD`)

export class UserStore {
  token = ``

  user: null | IUser = null

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
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

  get avatar() {
    return this.user?.picture || undefined
  }

  get engList() {
    return this.user?.engagement || []
  }

  logout() {
    cookie.remove(`token`, { path: `/`, domain: `.breathhh.app` })
    this.user = null
    sendMessageToExt(ACTION_LOGOUT)
  }

  async deleteMyAccount() {
    await fetcher.delete(`/profile`, { headers: { AUTHORIZATION: this.token } })
    this.logout()
  }

  async sendDeleteFact() {
    await fetcher.delete(`/users/extension`, { headers: { AUTHORIZATION: this.token } })
  }

  async sendDeleteFeedback(data: IDeleteFeedback) {
    await fetcher.post(`/users/feedbacks`, data, { headers: { AUTHORIZATION: this.token } })
  }

  async sendReferrer() {
    const refLink = Referrer.getRef()

    if (refLink && this.token) {
      try {
        const data = JSON.parse(refLink) as IReferrer
        await fetcher.post(`/users/analytics`, data, { headers: { AUTHORIZATION: this.token } })
        Referrer.clearRef()
      } catch (error) {
        console.log(`>> useReferrer`, error)
      }
    } else if (document.referrer) {
      const json = JSON.stringify({
        referrer: document.referrer,
        entry_url: window.location.href,
      })

      Referrer.safeRef(json)
    }
  }
}
