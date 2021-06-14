import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import './index.css'
import { App } from './App'

Sentry.init({
  dsn: 'https://421dffc7895f4d5e9b8f9c1c22532dde@o114540.ingest.sentry.io/5814909',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
