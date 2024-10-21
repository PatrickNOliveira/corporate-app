import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

const resources = {
    pt: { translation: ptTranslation },
    en: { translation: enTranslation },
    es: { translation: esTranslation },
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'pt',
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        saveMissing: true,
    });

export default i18n;