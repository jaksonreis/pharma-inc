import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ThemeProvider } from 'styled-components'

import { UsersProvider } from './hooks/users'

import theme from './global/styles/theme'

const queryClient = new QueryClient()
import { QueryClient, QueryClientProvider } from 'react-query'

ReactDOM.render(
  <UsersProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </ThemeProvider>
  </UsersProvider>,
  document.getElementById('root')
)
