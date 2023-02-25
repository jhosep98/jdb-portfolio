import React from 'react';
import { Icon } from '@iconify/react';
import { ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';

interface ListItemSkillModel {
  text: string;
}

export const ListItemSkill: React.FCC<ListItemSkillModel> = ({ text }) => {
  const theme = useTheme();

  return (
    <ListItem disableGutters alignItems="flex-start">
      <ListItemIcon sx={{ minWidth: '42px' }}>
        <Icon icon={ICONS_NAME.check} height="25" width="25" color={theme.palette.text.primary} />
      </ListItemIcon>

      <ListItemText
        primaryTypographyProps={{
          variant: 'body2',
          color: 'text.primary',
        }}
        primary={text}
      />
    </ListItem>
  );
};
