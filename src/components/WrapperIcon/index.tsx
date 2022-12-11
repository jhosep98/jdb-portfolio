import React from 'react';
import { useTheme } from '@mui/material';
import { Icon, IconifyIcon } from '@iconify/react';

interface WrapperIconModel {
  icon: string | IconifyIcon;
  color?: string;
}

export const WrapperIcon: React.FC<WrapperIconModel> = ({ icon, color }) => {
  const theme = useTheme();

  return (
    <Icon
      icon={icon}
      height="24"
      width="24"
      color={color || theme.palette.primary.main}
    />
  );
};
