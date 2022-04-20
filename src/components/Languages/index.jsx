import React, { useEffect, useState } from 'react';
import i18n from '../../i18next';

function Languages() {

  const [language, setLang] = useState(i18n.language);

  useEffect(() => {
  }, [language]);

  const changeLang = lang => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };
  return (
    <div className='languages'>
      <button id="fr" className={`${i18n.language == 'fr' && 'active'}`} onClick={() => changeLang('fr')}>FR</button>
      <button id="en" className={`${i18n.language == 'en' && 'active'}`} onClick={() => changeLang('en')}>EN</button>
      <button id="tr" className={`${i18n.language == 'tr' && 'active'}`} onClick={() => changeLang('tr')}>TR</button>
    </div>
  );
}

export default Languages;