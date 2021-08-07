import axios from 'axios'
import { UserStore } from 'src/store/UserStore'
import { apiUrl } from './config'

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
