import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider, ErrorBoundary } from '@rollbar/react'

import './ui/tokens.css'
import './index.css'
import { App } from './App'
import { Container } from './components/Container'

const isProd = process.env.NODE_ENV === `production`

const rollBarConfig = {
  accessToken: `960c63c90161452fa830caa464230012`,
  environment: isProd ? `production` : `development`,
}

ReactDOM.render(
  <React.StrictMode>
    {isProd ? (
      <Provider config={rollBarConfig}>
        <ErrorBoundary>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ErrorBoundary>
      </Provider>
    ) : (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    )}
  </React.StrictMode>,
  document.getElementById(`root`)
)
