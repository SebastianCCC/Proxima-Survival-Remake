import { useTranslation } from 'react-i18next'
import About from '@/components/layouts/about'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('header.hero.title')}</h1>
      <About />
    </>
  )
}

export default App
