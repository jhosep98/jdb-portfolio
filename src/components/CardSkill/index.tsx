import React from 'react';
import { Icon } from '@iconify/react';
import { CardFlexible } from '@wulperstudio/cms';
import { IconButton, Stack, Tooltip, useTheme } from '@mui/material';

import { WrapperText } from 'components';

interface CardSkillModel {
  title: string;
  icon: string;
  tooltip: React.ReactNode;
}

export const CardSkill: React.FCC<CardSkillModel> = ({ icon, title, tooltip }) => {
  const theme = useTheme();

  return (
    <CardFlexible
      sx={{
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <WrapperText text={title} />

        <Tooltip title={tooltip}>
          <IconButton>
            <Icon icon={icon} height="24" width="24" />
          </IconButton>
        </Tooltip>
      </Stack>
    </CardFlexible>
  );
};
