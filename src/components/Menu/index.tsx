import React from 'react';
import { Icon } from '@iconify/react';
import { Grid, Link, useTheme } from '@mui/material';
import { IconsPropsModel, Menu as WSMenu } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';

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
          color: '#fff',
        },
      }}
      customHeader={{
        sx: {
          borderRadius: '10px',
          width: 90,
        },
      }}
      footer={(
        <Link
          href="https://github.com/jhosep98/jdb-portfolio"
          aria-label="Rad more about source code for this project"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            rowGap="5px"
            color="primary.main"
            sx={{
              pb: 2,
            }}
          >
            <Icon
              icon={ICONS_NAME.githubAnimate}
              color={theme.palette.primary.main}
              width="36px"
              height="36px"
            />
          </Grid>
        </Link>
      )}
    />
  );
};
