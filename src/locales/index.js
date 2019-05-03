import en from './en.json';
import zhHant from './zh-Hant.json';

export const defaultLocale = 'en';
export const availableLocales = [
  // List of available locales
  'en',
  'zh-Hant',
];

export function covertLikeCoinLocale(locale) {
  switch (locale) {
    case 'zh':
      return 'zh-Hant';
    case 'cn':
      return 'zh-Hant'; // temp, no zh-Hans
    default:
      return locale;
  }
}

export default {
  en,
  'zh-Hant': zhHant,
};
