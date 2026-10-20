import { Header } from '@/components/layouts/header'
import { GameLore } from './components/layouts/gameLore'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <Header/>
      <GameLore/>
      </>
  )
}

export default App
