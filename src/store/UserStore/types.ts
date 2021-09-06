export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
}

export interface IEngagement {
  category_title: string
  engagement: null | number
  color: string
}

export interface IUser {
  breath: boolean
  email: string
  gdpr: boolean
  id: string
  mood_picker: boolean
  name: string
  tabs_count: number
  mood: IMood | null
  picture: string | null
  engagement: IEngagement[]
  facebook_connected: boolean
  google_connected: boolean
}

export interface IDeleteFeedback {
  reason: string
  comment: string
}

export interface IReferrer {
  referrer: string
  entry_url: string
}

export interface IMoodRates {
  date: string
  rate: 1 | 2 | 3 | 4 | 5
}
