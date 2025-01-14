import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app.tsx'
import { ThemeProvider } from './components/providers/theme-providers.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
