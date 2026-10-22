import { useTranslation } from 'react-i18next'

import creatureBottomLeft from '@/assets/images/about/creature-bottom-left.png'
import creatureBottomRight from '@/assets/images/about/creature-bottom-right.png'
import creatureTopLeft from '@/assets/images/about/creature-top-left.png'
import creatureTopRight from '@/assets/images/about/creature-top-right.png'

import '@/styles/common.block/about/about.css'

function About() {
  const { t } = useTranslation()

  return (
    <section className='about' id='about'>
      <img className='about__decoration about__decoration--top-left' src={creatureTopLeft} alt='' />
      <img className='about__decoration about__decoration--top-right' src={creatureTopRight} alt='' />
      <img className='about__decoration about__decoration--bottom-left' src={creatureBottomLeft} alt='' />
      <img className='about__decoration about__decoration--bottom-right' src={creatureBottomRight} alt='' />

      <div className='about__header'>
        <p className='about__subtitle'>{t('about.subtitle')}</p>
        <h2 className='about__title'>{t('about.title')}</h2>
      </div>

      <div className='about__content'>
        <p className='about__text about__text--left'>{t('about.intro')}</p>
        <p className='about__text about__text--right'>{t('about.journey')}</p>
      </div>
    </section>
  )
}

export default About
