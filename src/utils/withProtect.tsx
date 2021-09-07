import { Redirect, RouteComponentProps } from '@reach/router'
import { UserStore } from 'src/store/UserStore'

export const withLoginIfNotLoggedIn = (Component: any) => (props: RouteComponentProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return UserStore.user ? <Component {...props} /> : <Redirect to="/login" noThrow />
}

export const withOnboardingRedirectIfLoggedIn =
  (Component: any) => (props: RouteComponentProps) => {
    return !UserStore.user ? (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props} />
    ) : (
      <Redirect to="/onboarding" noThrow />
    )
  }

export const withAccountRedirectIfLoggedIn = (Component: any) => (props: RouteComponentProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return !UserStore.user ? <Component {...props} /> : <Redirect to="/dashboard" noThrow />
}

export const withOnboardingProtection = (Component: any) => (props: RouteComponentProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return UserStore.showOnboarding ? <Component {...props} /> : <Redirect to="/dashboard" noThrow />
}
