import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppRouter } from 'routes/AppRouter';
import { setTheme } from 'theme/defaultTheme';

export const App: React.FC = () => {
  const { theme } = setTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};
