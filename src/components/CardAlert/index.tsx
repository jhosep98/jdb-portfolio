import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material';
import { CardFlexible } from '@wulperstudio/cms';

import { WrapperText } from 'components';
import { ICONS_NAME } from 'helpers/icons';

export const CardAlert: React.FCC = () => {
  const theme = useTheme();

  return (
    <CardFlexible
      border={`1px solid ${theme.palette.divider}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        margin: '3rem auto',
      }}
    >
      <Icon
        icon={ICONS_NAME.alert}
        height="120"
        width="120"
        color={theme.palette.error.light}
      />

      <WrapperText
        variant="h4"
        text="Something went wrong!"
        textAlign="center"
        color="text.primary"
      />
    </CardFlexible>
  );
};
