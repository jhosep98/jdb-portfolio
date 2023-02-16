import React from 'react';
import { useTranslation } from 'react-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './language/index';
import { Language } from 'interfaces';
import { useLocalStorage } from 'hooks';
import { AppRouter } from 'routes/AppRouter';
import { setTheme } from 'theme/defaultTheme';
import { InitializerIcons } from 'helpers/icons';
import { SnackbarProvider, SnackbarUtilsConfigurator } from 'helpers';
import {
  DrawerStateProvider,
  LanguageProvider,
  ThemeContext,
  ThemeStateProvider,
} from 'context';

InitializerIcons();

const queryClient = new QueryClient();

const AppState = ({
  children,
}: {
  children: React.ReactNode | Array<React.ReactNode>;
}) => {
  const { i18n } = useTranslation();
  const { modeTheme } = React.useContext(ThemeContext);
  const { theme } = setTheme({ mode: modeTheme });
  const [languageFromLocalStorage] = useLocalStorage<Language>(
    'language',
    'en',
  );

  React.useEffect(() => {
    if (languageFromLocalStorage) {
      i18n.changeLanguage(languageFromLocalStorage);
    }
  }, [languageFromLocalStorage]);

  return (
    <ThemeProvider theme={theme}>
      <DrawerStateProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </DrawerStateProvider>
    </ThemeProvider>
  );
};

export const App: React.FC = () => (
  <ThemeStateProvider>
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AppState>
          <ReactQueryDevtools initialIsOpen={false} />
          <AppRouter />
        </AppState>
      </QueryClientProvider>
    </SnackbarProvider>
  </ThemeStateProvider>
);
