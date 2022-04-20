import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng:'en',
  lng:'en',
  resources:{
    en:{
      translation:require('./constant/languages/en.json')
    },
    tr:{
      translation:require('./constant/languages/tr.json')
    },
    fr:{
      translation:require('./constant/languages/fr.json')
    }
  },
  ns:['translation'],
  defaultNS:'translation'
});

i18n.languages=['en','tr','fr'];

export default i18n;