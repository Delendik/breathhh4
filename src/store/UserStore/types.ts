export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
}

export interface IEngagement {
  category_id: number
  category_title: string
  engagement: null | number
  color: string
  limit: number
}

export enum OnboardingState {
  INITIAL = `onboarding_initial`,
  INSTALLED = `onboarding_extension_installed_step`,
  COMPLETED = `onboarding_completed`,
}

interface IActiveSubscription {
  external_subscription_id: string
  external_plan_id: string
  external_checkout_id: null
  next_bill_date: string
  plan_title: string
  plan_price: number
}

export interface IUser {
  id: string
  picture: string | null
  email: string
  name: string
  breath: boolean
  mood_picker: boolean
  gdpr: boolean
  mood: IMood | null
  warming: null
  tabs_count: number
  onboarding_state: OnboardingState
  engagement: IEngagement[]
  facebook_connected: boolean
  google_connected: boolean
  subscription_state: `subscription_not_active` | `subscription_trial` | `subscription_active`
  trial_to: string
  trial_from: string
  active_subscription: null | IActiveSubscription
}

export type IDeleteFeedback = Array<string>

export interface IReferrer {
  referrer: string
  entry_url: string
}

export interface IMoodRates {
  date: string
  rate: 1 | 2 | 3 | 4 | 5
}
