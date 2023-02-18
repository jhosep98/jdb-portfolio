import React from 'react';
import { Icon } from '@iconify/react';
import { IconButton, Stack, useTheme } from '@mui/material';

import { useAnimateValue } from 'hooks';
import { WrapperText } from 'components';

interface IconCounterModel {
  icon: string;
  counter: number;
}

export const IconCounter: React.FCC<IconCounterModel> = ({ counter, icon }) => {
  const theme = useTheme();
  const { value } = useAnimateValue({
    start: 0,
    end: counter,
    duration: 1000,
  });

  return (
    <Stack alignItems="center" justifyContent="center">
      <IconButton aria-label="github">
        <Icon
          icon={icon}
          width="50"
          height="50"
          color={theme.palette.primary.main}
        />
      </IconButton>

      <WrapperText
        text={`+${value} commits`}
        fontWeight={600}
        variant="h5"
        component="span"
      />
    </Stack>
  );
};
