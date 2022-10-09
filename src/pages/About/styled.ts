import { Box, styled } from '@mui/material';

export const ContainerProfile = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '254px',
  background: theme.palette.background.default,
  transition: 'box-shadow .3s ease, transform .2s ease',
  margin: 0,
}));

export const Profile = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  height: '100%',
  maxWidth: '100%',
  borderRadius: '15px',
  '&:hover': {
    boxShadow: theme.shadows[1],
  },
}));
