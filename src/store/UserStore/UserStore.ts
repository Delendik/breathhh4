import { makeAutoObservable, runInAction } from 'mobx'
import dayjs from 'dayjs'
import cookie from 'js-cookie'

import { sendMessageToExt } from 'src/utils/config'
import { fetcher } from 'src/utils/fetcher'
import { ACTION_LOGOUT } from 'src/utils/actions'

import type { IUser, IDeleteFeedback, IReferrer } from './types'

const today = () => dayjs().format('YYYY-MM-DD')

export class UserStore {
  token = ''

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
    if (this.user?.engagement) {
      return Object.keys(this.user.engagement).map((name) => ({
        name,
        value: this.user!.engagement[name],
      }))
    }

    return []
  }

  logout() {
    cookie.remove('token', { path: '/', domain: '.breathhh.app' })
    this.user = null
    sendMessageToExt(ACTION_LOGOUT)
  }

  async sendDeleteFact() {
    await fetcher.delete(`/users/extension`, { headers: { AUTHORIZATION: this.token } })
  }

  async sendDeleteFeedback(data: IDeleteFeedback) {
    await fetcher.post(`/users/feedbacks`, data, { headers: { AUTHORIZATION: this.token } })
  }

  async sendReferrer(data: IReferrer) {
    await fetcher.post(`/users/analytics`, data, { headers: { AUTHORIZATION: this.token } })
  }
}
