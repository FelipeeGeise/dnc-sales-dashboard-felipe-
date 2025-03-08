import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { darckTheme, GlobalStyle, lighTheme } from './style/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darckTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
