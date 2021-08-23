import React from 'react'
import ReactDOM from 'react-dom'
import Rollbar from 'rollbar'
// @ts-ignore
import { Provider, ErrorBoundary } from '@rollbar/react'

import './index.css'
import { App } from './App'

const rollbarConfig = {
  accessToken: `960c63c90161452fa830caa464230012`,
  environment: process.env.NODE_ENV === `production` ? `production` : `development`,
}

const rollbar = new Rollbar(rollbarConfig)

ReactDOM.render(
  <React.StrictMode>
    <Provider instance={rollbar}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById(`root`)
)
