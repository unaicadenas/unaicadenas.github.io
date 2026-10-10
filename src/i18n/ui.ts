import es from './locales/es.json';
import eu from './locales/eu.json';
import en from './locales/en.json';

export const languages = {
    es: 'Español',
    eu: 'Euskera',
    en: 'English',
} as const;

export const ui = {
    es,
    eu,
    en,
} as const;

export type Lang = keyof typeof ui;