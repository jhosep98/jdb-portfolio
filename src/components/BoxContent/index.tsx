import React from 'react';
import { Box, Container, useTheme } from '@mui/material';

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
        py: '15px',
        [theme.breakpoints.down('md')]: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        {children}
      </Container>
    </Box>
  );
};
