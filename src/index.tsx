import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';

import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import { getInitialLanguage, saveLanguage, updateDocumentLanguage, updateLanguageUrl } from 'utils/language';

const initialLanguage = getInitialLanguage();

saveLanguage(initialLanguage);
updateDocumentLanguage(initialLanguage);
updateLanguageUrl(initialLanguage);

i18next.init({
  interpolation: { escapeValue: false },
  lng: initialLanguage,
  resources: {
    en: { global: {} },
    zh: { global: {} }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
