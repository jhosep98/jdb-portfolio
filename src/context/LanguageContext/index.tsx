import React from 'react';

import { useLocalStorage } from 'hooks';
import { Language, LanguageContextModel } from 'interfaces';

export const LanguageContext = React.createContext({} as LanguageContextModel);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [languageState, setLanguageState] = useLocalStorage<Language>(
    'language',
    'en',
  );

  const setThemeValue = React.useMemo(
    () => (value: Language) => setLanguageState(value),
    [setLanguageState],
  );

  const languageMemo = React.useMemo(
    () => ({ modeLanguage: languageState, setLanguage: setThemeValue }),
    [languageState, setThemeValue],
  );

  return (
    <LanguageContext.Provider value={languageMemo}>
      {children}
    </LanguageContext.Provider>
  );
};
