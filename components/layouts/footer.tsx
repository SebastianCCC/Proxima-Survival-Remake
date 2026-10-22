import { useTranslation } from 'react-i18next'
import '@/styles/common.block/footer/footer.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <section id='community' className='community'>
        <h2>{t('footer.community.title')}</h2>
        <p>{t('footer.community.help')}</p>
        <a href='https://discord.com/invite/ahRjRQ4SaD' className='link'>
          <i className='fa-brands fa-discord'></i> Discord
        </a>
        <p>{t('footer.community.itch')}</p>
        <a href='https://nullzone-studios.itch.io' className='link'>
          <i className='fa-brands fa-itch-io'></i> itch.io
        </a>
      </section>

      <footer className='site-footer'>
        <div className='footer-inner'>
          <div className='footer-left'>
            <div className='brand'>Proxima Survival</div>
            <p className='tagline'>{t('footer.brand.tagline')}</p>
            <p className='copyright'>{t('footer.brand.copyright')}</p>
          </div>

          <div className='footer-center'>
            <p className='company'>NullZone Studios I/S</p>
            <p className='cvr'>CVR - 46293223</p>
            <p className='contact-label'>{t('footer.contact.label')}</p>
            <a href='mailto:support@nullzonestudios.com'>support@nullzonestudios.com</a>
          </div>

          <div className='footer-right'>
            <div className='socials'>
              <a href='#'>
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a href='#'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fa-brands fa-youtube'></i>
              </a>
            </div>

            <div className='studio-logo'>
              <span className='name'>NullZone</span>
              <span className='sub'>Studios</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export { Footer }
