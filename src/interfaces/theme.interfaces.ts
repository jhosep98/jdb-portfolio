export type Theme = 'dark' | 'light';

export interface InitialDataModel {
  mode: Theme;
}

export interface ThemeContextModel {
  modeTheme: InitialDataModel;
  setTheme: (theme: Theme) => void;
}
