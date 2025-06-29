import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import headerEn from './locales/en/header.json';
import headerEs from './locales/es/header.json';
import headerNl from './locales/nl/header.json';

import homeEs from './locales/es/home.json';
import homeNl from './locales/nl/home.json';
import homeEn from './locales/en/home.json';

const resources = {
    en: {
        header: headerEn,
        home: homeEn,
    },
    es: {
        header: headerEs,
        home: homeEs,
    },
    nl: {
        header: headerNl,
        home: homeNl,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'nl', // Idioma predeterminado
        fallbackLng: 'es', // Idioma de respaldo
        ns: ['header', 'home'], // Declara todos tus namespaces
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
};

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'header'; // Tu namespace por defecto
        resources: TranslationResources; // Tu objeto de recursos tipado
    }
}