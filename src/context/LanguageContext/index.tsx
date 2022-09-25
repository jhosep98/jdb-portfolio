import React from 'react';

import {
  InitialLanguageDataModel,
  Language,
  LanguageContextModel,
} from 'interfaces';

const INITIAL_LANGUAGE_DATA: InitialLanguageDataModel = { language: 'en' };

export const LanguageContext = React.createContext({} as LanguageContextModel);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [languageState, setLanguageState] = React.useState(
    INITIAL_LANGUAGE_DATA,
  );

  const setThemeValue = (value: Language) => setLanguageState({ language: value });

  const languageMemo = React.useMemo(
    () => ({ modeLanguage: languageState, setLanguage: setThemeValue }),
    [languageState],
  );

  return (
    <LanguageContext.Provider value={languageMemo}>
      {children}
    </LanguageContext.Provider>
  );
};
