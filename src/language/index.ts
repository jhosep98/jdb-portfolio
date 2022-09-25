import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { es } from './es';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
});

export default i18n;
