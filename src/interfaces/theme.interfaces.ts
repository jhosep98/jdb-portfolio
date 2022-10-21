import { PaletteMode } from '@mui/material';

export interface ThemeContextModel {
  modeTheme: PaletteMode;
  setTheme: (theme: PaletteMode) => void;
}
