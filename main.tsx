import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/app.tsx'

import '@/helpers/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
