import { Icon } from '@iconify/react';

import { Language, Theme } from 'interfaces';
import { ICONS_NAME } from 'helpers/icons';

interface IconLanguageModel {
  id: string;
  name: Language;
  icon: React.ReactNode;
}

interface IconThemeModel {
  id: string;
  name: Theme;
  icon: React.ReactNode;
}

export const values: Array<IconThemeModel> = [
  {
    id: 'light',
    name: 'light',
    icon: <Icon icon={ICONS_NAME.themeLight} color="inherit" width="24" />,
  },
  {
    id: 'dark',
    name: 'dark',
    icon: <Icon icon={ICONS_NAME.themeDark} color="inherit" width="24" />,
  },
];

export const valuesLayout = [
  {
    id: 'float',
    name: 'float',
    icon: <Icon icon={ICONS_NAME.layoutFloat} color="inherit" width="24" />,
  },
  {
    id: 'divider',
    name: 'divider',
    icon: <Icon icon={ICONS_NAME.layoutDivider} color="inherit" width="24" />,
  },
];

export const valuesLanguage: Array<IconLanguageModel> = [
  {
    id: 'en',
    name: 'en',
    icon: (
      <Icon icon={ICONS_NAME.unitedKingdomFlag} color="inherit" width="24" />
    ),
  },
  {
    id: 'es',
    name: 'es',
    icon: <Icon icon={ICONS_NAME.spanishFlag} color="inherit" width="24" />,
  },
];
