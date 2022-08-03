import React from 'react';
import { Box, useTheme } from '@mui/material';

interface BoxContentModel {
  children?: React.ReactNode | React.ReactNode[];
}

export const BoxContent: React.FC<BoxContentModel> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        boxShadow: theme.shadows[1],
        padding: '1rem',
      }}
    >
      {children}
    </Box>
  );
};
