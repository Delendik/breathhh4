import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'
import dayjs from 'dayjs'
import cookie from 'js-cookie'
import { apiUrl, sendMessageToExt } from '../../utils/config'
import type { IUser } from './types'

const today = () => dayjs().format('YYYY-MM-DD')

class UserStore {
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
    return this.user?.facebook_auth_hash.info.image
  }

  logout() {
    cookie.remove('token')
    this.user = null
    sendMessageToExt('logout')
  }
}

export default new UserStore()
