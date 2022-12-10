import { PaletteMode } from '@mui/material';
import { InputBoxGroupModel } from '@wulperstudio/cms';

import { values } from 'data';

export const paletteModeArgs: InputBoxGroupModel<{
  id: PaletteMode;
  name: PaletteMode;
  children?: React.ReactNode;
}> = {
  options: [
    {
      id: 'light',
      name: 'light',
      children: values[0].icon,
    },
    {
      id: 'dark',
      name: 'dark',
      children: values[1].icon,
    },
  ],
  label: 'Theme',
  variant: 'outlined',
  sizeElement: 'large',
};
