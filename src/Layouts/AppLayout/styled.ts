import { Box, styled } from '@mui/material';

export const MainLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: '100vh',
  overflowX: 'hidden',
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    padding: 0,
    height: '100%',
  },
}));

export const BoxHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%',
  borderRadius: '10px',
  minHeight: '75px',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 8px',
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
  },
}));
