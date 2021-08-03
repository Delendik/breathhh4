import axios from 'axios'
import { apiUrl } from './config'
import { UserStore } from 'src/store/UserStore'

export const fetcher = axios.create({
  baseURL: apiUrl,
})

fetcher.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      UserStore.logout()
    }

    return error
  }
)
