import { Icon } from '@iconify/react';

import { Language } from 'interfaces';
import { ICONS_NAME } from 'helpers/icons';
import { PaletteMode } from '@mui/material';

interface IconLanguageModel {
  id: string;
  name: Language;
  icon: React.ReactNode;
}

interface IconThemeModel {
  id: string;
  name: PaletteMode;
  icon: React.ReactNode;
}

export const values: Array<IconThemeModel> = [
  {
    id: 'light',
    name: 'light',
    icon: <Icon icon={ICONS_NAME.light} color="inherit" width="24" />,
  },
  {
    id: 'dark',
    name: 'dark',
    icon: <Icon icon={ICONS_NAME.dark} color="inherit" width="24" />,
  },
];

export const valuesLayout = [
  {
    id: 'float',
    name: 'float',
    icon: <Icon icon={ICONS_NAME.float} color="inherit" width="24" />,
  },
  {
    id: 'divider',
    name: 'divider',
    icon: <Icon icon={ICONS_NAME.divider} color="inherit" width="24" />,
  },
];

export const valuesLanguage: Array<IconLanguageModel> = [
  {
    id: 'en',
    name: 'en',
    icon: (
      <Icon icon={ICONS_NAME.en} color="inherit" width="24" />
    ),
  },
  {
    id: 'es',
    name: 'es',
    icon: <Icon icon={ICONS_NAME.es} color="inherit" width="24" />,
  },
];
