interface PlanTrial {
  external_id: null
  recurring_type: `trial`
}

interface PlanSubscription {
  external_id: string
  recurring_type: `monthly` | `yearly`
}

export type Plan = {
  title: string
  description: string
} & (PlanTrial | PlanSubscription)
