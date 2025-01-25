import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app.tsx'
import { ThemeProvider } from './components/providers/theme-providers.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProviders from './components/providers/auth-providers.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
        <AuthProviders>
          <App />
        </AuthProviders>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
