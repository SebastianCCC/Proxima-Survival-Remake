import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

import { Config } from '@/config'

/* eslint-disable-next-line */
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: Config.DEFAULT_LANGUAGE,
    debug: Config.ENV === 'DEV',
    load: 'languageOnly',
  })
