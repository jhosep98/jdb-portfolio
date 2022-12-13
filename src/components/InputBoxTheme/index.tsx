import React from 'react';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { InputBox } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';

export const InputBoxTheme: React.FCC = () => (
  <Box>
    <InputBox>
      <Icon icon={ICONS_NAME.light} color="inherit" width="24" height="24" />
    </InputBox>

    <InputBox>
      <Icon icon={ICONS_NAME.dark} color="inherit" width="24" height="24" />
    </InputBox>
  </Box>
);
