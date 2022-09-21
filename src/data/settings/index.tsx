import { Icon } from '@iconify/react';

import { Theme } from 'interfaces';
import { ICONS_NAME } from 'helpers/icons';

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
