interface IFacebook {
  info: {
    image: string
  }
}

export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
  // created_at: string
  // updated_at: string
}

export interface IUser {
  breath: boolean
  email: string
  gdpr: boolean
  id: string
  mood_picker: boolean
  name: string
  tabs_count: number
  facebook_auth_hash: IFacebook
  mood: IMood | null
}
