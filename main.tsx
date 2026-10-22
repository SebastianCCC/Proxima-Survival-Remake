import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app.tsx'
import About from '@/components/layouts/about'

import '@/styles/base.css'

import '@/helpers/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <About />
  </StrictMode>,
)
