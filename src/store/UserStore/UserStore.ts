import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
import dayjs from 'dayjs'
import cookie from 'js-cookie'
import { apiUrl, sendMessageToExt } from '../../utils/config'
import { ACTION_LOGOUT } from '../../utils/actions'
import type { IUser } from './types'

const today = () => dayjs().format('YYYY-MM-DD')

export class UserStore {
  token: string = ''
  user: null | IUser = null

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
  }

  async fetchUser() {
    const { data } = await axios.get<IUser>(apiUrl + `/profile?date=${today()}`, {
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

  logout() {
    cookie.remove('token', { path: '/', domain: '.breathhh.app' })
    this.user = null
    sendMessageToExt(ACTION_LOGOUT)
  }
}
