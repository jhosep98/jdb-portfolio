import React from 'react';
import { PaletteMode } from '@mui/material';

import { useLocalStorage } from 'hooks';
import { ThemeContextModel } from 'interfaces';

export const ThemeContext = React.createContext({} as ThemeContextModel);

export const ThemeStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeState, setThemeState] = useLocalStorage<PaletteMode>(
    'theme',
    'light',
  );

  const setThemeValue = React.useMemo(
    () => (value: PaletteMode) => setThemeState(value),
    [setThemeState],
  );

  const themeMemo = React.useMemo(
    () => ({ modeTheme: themeState, setTheme: setThemeValue }),
    [themeState, setThemeValue],
  );

  return (
    <ThemeContext.Provider value={themeMemo}>{children}</ThemeContext.Provider>
  );
};
