import { Box, styled } from '@mui/material';

export const MainLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  overflowX: 'hidden',
  padding: '10px',
}));
