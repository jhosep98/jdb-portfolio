export type Language = 'en' | 'es';

export interface InitialLanguageDataModel {
  language: Language;
}

export interface LanguageContextModel {
  modeLanguage: Language;
  setLanguage: (theme: Language) => void;
}
