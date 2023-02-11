import React from 'react';
import { Box, Container, useTheme } from '@mui/material';

interface BoxContentModel {
  isContainer?: boolean;
}

export const BoxContent: React.FCC<BoxContentModel> = ({
  children,
  isContainer,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        overflowY: 'auto',
        height: '100%',
        backgroundColor: theme.palette.background.default,
        width: '100%',
        borderRadius: '10px',
        boxShadow: theme.shadows[1],
        position: 'relative',
        [theme.breakpoints.down('md')]: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      }}
    >
      {isContainer ? (
        children
      ) : (
        <Container
          maxWidth="xl"
          sx={{
            height: '100%',
          }}
        >
          {children}
        </Container>
      )}
    </Box>
  );
};
