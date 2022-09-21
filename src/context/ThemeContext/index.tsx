import React from 'react';

import { InitialDataModel, Theme, ThemeContextModel } from 'interfaces';

const INITIAL_THEME_DATA: InitialDataModel = { mode: 'light' };

export const ThemeContext = React.createContext({} as ThemeContextModel);

export const ThemeStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeState, setThemeState] = React.useState(INITIAL_THEME_DATA);

  const setThemeValue = (value: Theme) => setThemeState({ mode: value });

  const themeMemo = React.useMemo(
    () => ({ modeTheme: themeState, setTheme: setThemeValue }),
    [themeState],
  );

  return (
    <ThemeContext.Provider value={themeMemo}>{children}</ThemeContext.Provider>
  );
};
