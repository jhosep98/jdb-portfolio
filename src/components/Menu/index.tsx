import React from 'react';
import { IconsPropsModel, Menu as WSMenu } from '@wulperstudio/cms';

export interface MenuPropsModel {
  menuList: IconsPropsModel[];
}

export const Menu: React.FC<MenuPropsModel> = ({ menuList }) => (
  <WSMenu
    menu="float"
    display="flex"
    icons={menuList}
    logoUrl="https://source.unsplash.com/random"
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
