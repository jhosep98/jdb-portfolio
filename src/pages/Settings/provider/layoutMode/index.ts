import { InputBoxGroupModel } from '@wulperstudio/cms';

import { valuesLayout } from 'data';
import { LayoutMode } from 'interfaces';

export const layoutModeArgs: InputBoxGroupModel<{
  id: LayoutMode;
  name: LayoutMode;
  children?: React.ReactNode;
}> = {
  options: [
    {
      id: 'float',
      name: 'float',
      children: valuesLayout[0].icon,
    },
    {
      id: 'divider',
      name: 'divider',
      children: valuesLayout[1].icon,
    },
  ],
  label: 'Layout',
  variant: 'outlined',
  sizeElement: 'large',
};
