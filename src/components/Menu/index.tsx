import React from 'react';
import { useTheme } from '@mui/material';
import { IconsPropsModel, Menu as WSMenu } from '@wulperstudio/cms';

export interface MenuPropsModel {
  menuList: IconsPropsModel[];
}

export const Menu: React.FCC<MenuPropsModel> = ({ menuList }) => {
  const theme = useTheme();

  return (
    <WSMenu
      menu="float"
      display="flex"
      icons={menuList}
      order={2}
      spacing={3}
      spacingIcons={2}
      AvatarProps={{
        children: 'JD',
        alt: 'Jhosep Davila',
        sx: {
          background: theme.palette.primary.main,
        },
      }}
      customHeader={{
        sx: {
          borderRadius: '10px',
          width: 90,
        },
      }}
    />
  );
};
