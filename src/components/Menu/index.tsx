import React from 'react';
import { IconsPropsModel, Menu as WSMenu } from '@wulperstudio/cms';

import { consts } from 'helpers/consts';

export interface MenuPropsModel {
  menuList: IconsPropsModel[];
}

export const Menu: React.FCC<MenuPropsModel> = ({ menuList }) => (
  <WSMenu
    menu="float"
    display="flex"
    icons={menuList}
    logoUrl={consts.profilePhotoMenu}
    order={2}
    spacing={3}
    spacingIcons={2}
    customHeader={{
      sx: {
        borderRadius: '10px',
        width: 90,
      },
    }}
  />
);
