import { Redirect, RouteComponentProps } from '@reach/router'
import { UserStore } from 'src/store/UserStore'

export const withProtectNotLogin = (Component: any) => (props: RouteComponentProps) => {
  return UserStore.user ? <Component {...props} /> : <Redirect to="/login" noThrow />
}

export const withProtectWithLogin = (Component: any) => (props: RouteComponentProps) => {
  return !UserStore.user ? <Component {...props} /> : <Redirect to="/onboarding" noThrow />
}
