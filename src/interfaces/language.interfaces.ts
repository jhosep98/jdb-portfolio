export type Language = 'en' | 'es';

export interface InitialLanguageDataModel {
  language: Language;
}

export interface LanguageContextModel {
  modeLanguage: InitialLanguageDataModel;
  setLanguage: (theme: Language) => void;
}
