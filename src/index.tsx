import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
// @ts-ignore
import { Provider, ErrorBoundary } from '@rollbar/react'

import './ui/tokens.css'
import './index.css'
import { App } from './App'
import { Container } from './components/Container'

const rollbarConfig = {
  accessToken: `960c63c90161452fa830caa464230012`,
  environment: process.env.NODE_ENV === `production` ? `production` : `development`,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        <HelmetProvider>
          <Container>
            <App />
          </Container>
        </HelmetProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById(`root`)
)
