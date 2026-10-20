import { useTranslation } from 'react-i18next'

import '@/styles/common.block/header/header.css'

import { Cards } from '@/components/layouts/cards'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className='header'>
      <div className='header_container'>
        <h1 className='header_title'>{t('header.hero.title')}</h1>
        <p className='header_title_deck'>{t('header.hero.title_deck')}</p>
      </div>
      <Cards />
      <div className='header_backdrop' />
    </header>
  )
}

export { Header }
