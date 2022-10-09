import React from 'react';
import { useTheme } from '@mui/material';
import { Icon, IconifyIcon } from '@iconify/react';

interface WrapperIconModel {
  icon: string | IconifyIcon;
}

export const WrapperIcon: React.FC<WrapperIconModel> = ({ icon }) => {
  const theme = useTheme();

  return (
    <Icon
      icon={icon}
      width="20"
      height="20"
      color={theme.palette.primary.main}
    />
  );
};
