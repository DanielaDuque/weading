import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Import Header translations
import headerEn from './locales/en/header.json';
import headerEs from './locales/es/header.json';
import headerNl from './locales/nl/header.json';

// Import Home translations
import homeEs from './locales/es/home.json';
import homeNl from './locales/nl/home.json';
import homeEn from './locales/en/home.json';

//Import Party translations
import partyEn from './locales/en/party.json';
import partyEs from './locales/es/party.json';
import partyNl from './locales/nl/party.json';

//Import ComingSoon translations
import comingSoonEn from './locales/en/comingSoon.json';
import comingSoonEs from './locales/es/comingSoon.json';
import comingSoonNl from './locales/nl/comingSoon.json';

//Import Contact translations
import contactEn from './locales/en/contact.json';
import contactEs from './locales/es/contact.json';
import contactNl from './locales/nl/contact.json';


const resources = {
    en: {
        header: headerEn,
        home: homeEn,
        party: partyEn,
        comingSoon: comingSoonEn,
        contact: contactEn,
    },
    es: {
        header: headerEs,
        home: homeEs,
        party: partyEs,
        comingSoon: comingSoonEs,
        contact: contactEs,
    },
    nl: {
        header: headerNl,
        home: homeNl,
        party: partyNl,
        comingSoon: comingSoonNl,
        contact: contactNl,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'nl', // Idioma de respaldo
        ns: ['header', 'home', 'party', 'comingSoon', 'contact'], // Declara todos tus namespaces
        defaultNS: 'header', // Namespace por defecto si no se especifica uno
        interpolation: {
            escapeValue: false, // React ya escapa los valores
        },
        react: {
            useSuspense: false, // Puedes usar 'true' si configuras Suspense
        },
        detection: {
            order: ['localStorage', 'navigator'], // Order of detection: try localStorage first, then browser language
            caches: ['localStorage'], // Where to cache the last selected language
            lookupLocalStorage: 'i18nextLng', // Key to use in localStorage
            // cookieDomain: 'https://danieladuque.github.io',
        }
    });

export default i18n;

// --- Tipado para TypeScript ---
// La magia para que TypeScript entienda tus namespaces

// Creamos un tipo que representa la estructura completa de tus traducciones
type TranslationResources = {
    header: typeof headerEn;
    home: typeof homeEn;
    party: typeof partyEn;
    comingSoon: typeof comingSoonEn;
    contact: typeof contactEn;
};

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'header'; // Tu namespace por defecto
        resources: TranslationResources; // Tu objeto de recursos tipado
    }
}