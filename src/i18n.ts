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

// Import Footer translations
import footerEn from './locales/en/footer.json';
import footerEs from './locales/es/footer.json';
import footerNl from './locales/nl/footer.json';

// Import Ceremony translations
import ceremonyEn from './locales/en/ceremony.json';
import ceremonyEs from './locales/es/ceremony.json';
import ceremonyNl from './locales/nl/ceremony.json';

// Import About translations
import aboutEn from './locales/en/about.json';
import aboutEs from './locales/es/about.json';
import aboutNl from './locales/nl/about.json';

const resources = {
    en: {
        header: headerEn,
        home: homeEn,
        party: partyEn,
        comingSoon: comingSoonEn,
        contact: contactEn,
        footer: footerEn,
        ceremony: ceremonyEn,
        about: aboutEn,
    },
    es: {
        header: headerEs,
        home: homeEs,
        party: partyEs,
        comingSoon: comingSoonEs,
        contact: contactEs,
        footer: footerEs,
        ceremony: ceremonyEs,
        about: aboutEs,
    },
    nl: {
        header: headerNl,
        home: homeNl,
        party: partyNl,
        comingSoon: comingSoonNl,
        contact: contactNl,
        footer: footerNl,
        ceremony: ceremonyNl,
        about: aboutNl,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'nl', // Idioma de respaldo
        ns: ['header', 'home', 'party', 'comingSoon', 'contact', 'footer', 'ceremony', 'about'], // Declara todos tus namespaces
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
    footer: typeof footerEn;
    ceremony: typeof ceremonyEn;
    about: typeof aboutEn;
};

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'header'; // Tu namespace por defecto
        resources: TranslationResources; // Tu objeto de recursos tipado
    }
}