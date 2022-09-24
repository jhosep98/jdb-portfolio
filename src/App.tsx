import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './language/index';
import { AppRouter } from 'routes/AppRouter';
import { setTheme } from 'theme/defaultTheme';
import { ThemeContext, ThemeStateProvider } from 'context';

const AppState = ({
  children,
}: {
  children: React.ReactNode | Array<React.ReactNode>;
}) => {
  const { modeTheme } = React.useContext(ThemeContext);
  const { theme } = setTheme({ mode: modeTheme.mode });

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export const App: React.FC = () => (
  <ThemeStateProvider>
    <CssBaseline />
    <AppState>
      <AppRouter />
    </AppState>
  </ThemeStateProvider>
);
