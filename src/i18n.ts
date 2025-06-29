import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

const resources = {
    en: {
        header: headerEn,
        home: homeEn,
        party: partyEn,
    },
    es: {
        header: headerEs,
        home: homeEs,
        party: partyEs,
    },
    nl: {
        header: headerNl,
        home: homeNl,
        party: partyNl,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'nl', // Idioma predeterminado
        fallbackLng: 'es', // Idioma de respaldo
        ns: ['header', 'home', 'party'], // Declara todos tus namespaces
        defaultNS: 'header', // Namespace por defecto si no se especifica uno
        interpolation: {
            escapeValue: false, // React ya escapa los valores
        },
        react: {
            useSuspense: false, // Puedes usar 'true' si configuras Suspense
        },
    });

export default i18n;

// --- Tipado para TypeScript ---
// La magia para que TypeScript entienda tus namespaces

// Creamos un tipo que representa la estructura completa de tus traducciones
type TranslationResources = {
    header: typeof headerEn;
    home: typeof homeEn;
    party: typeof partyEn;
};

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'header'; // Tu namespace por defecto
        resources: TranslationResources; // Tu objeto de recursos tipado
    }
}