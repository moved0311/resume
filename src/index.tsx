import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import language_en from 'constants/en.json'
import language_zh from 'constants/zh.json'

import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'zh',
  resources: {
    en: {
      global: language_en
    },
    zh: {
      global: language_zh
    }
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
