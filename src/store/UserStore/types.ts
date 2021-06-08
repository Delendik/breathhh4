export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
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
}
