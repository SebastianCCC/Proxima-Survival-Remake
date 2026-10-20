import { useTranslation } from 'react-i18next'
import { Footer } from '@/components/layouts/footer'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('header.hero.title')}</h1>
      <Footer />
    </>
  )
}

export default App
