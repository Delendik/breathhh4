import { Redirect, RouteComponentProps } from '@reach/router'
import UserStore from '../store/UserStore'

export const withProtect = (Component: any) => (props: RouteComponentProps) => {
  return UserStore.user ? <Component {...props} /> : <Redirect to="/login" noThrow />
}
