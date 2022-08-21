import React from 'react';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { InputBox } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';

export const InputBoxTheme: React.FC = () => (
  <Box>
    <InputBox>
      <Icon icon={ICONS_NAME.themeLight} color="inherit" width="24" />
    </InputBox>

    <InputBox>
      <Icon icon={ICONS_NAME.themeDark} color="inherit" width="24" />
    </InputBox>
  </Box>
);
