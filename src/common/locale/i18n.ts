import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { langTH } from './th';
import { langEN } from './en';

const resources = {
    th: { translation: langTH },
    en: { translation: langEN },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'th',
    fallbackLng: 'en',
    debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
