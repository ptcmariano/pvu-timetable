import React from 'react';
import { ThemeProvider } from 'evergreen-ui';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { es, en, br } from '@constants/translations';

import AppRouter from '@router/AppRouter';
import { theme } from '@config';

i18n.use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      },
      br: {
        translation: br,
      },
    },
    lng: 'br',
    fallbackLng: 'br',
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => (
  <ThemeProvider value={theme}>
    <AppRouter />
  </ThemeProvider>
);

export default App;
