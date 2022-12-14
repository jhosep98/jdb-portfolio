import React from 'react';
import { Icon } from '@iconify/react';
import { IconButton, Stack, useTheme } from '@mui/material';
import { CardFlexible } from '@wulperstudio/cms';

import { WrapperText } from 'components';

interface CardSkillModel {
  title: string;
  icon: string;
}

export const CardSkill: React.FCC<CardSkillModel> = ({ icon, title }) => {
  const theme = useTheme();

  return (
    <CardFlexible
      sx={{
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <WrapperText text={title} />

        <IconButton>
          <Icon icon={icon} />
        </IconButton>
      </Stack>
    </CardFlexible>
  );
};
