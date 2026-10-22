import { useTranslation } from 'react-i18next'

import '@/styles/common.block/header/header.css'

import { Cards } from '@/components/layouts/cards'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className='header'>
      <div className='navbar'>
        <div className='links no-scrollbar'>
          <h2 className='header_title'>{t('header.hero.title')}</h2>
          <div>
            <p className='header_title_deck'>
              <a href='#about'>{t('header.nav.links.about')}</a>
            </p>
            <p className='header_title_deck'>
              <a href='#lore'>{t('header.nav.links.lore')}</a>
            </p>
            <p className='header_title_deck'>
              <a href='#community'>{t('header.nav.links.Community')}</a>
            </p>
          </div>
        </div>
      </div>
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
