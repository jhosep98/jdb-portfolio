import { Fab, styled } from '@mui/material';

export const DownloadFab = styled(Fab)(({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.fab,
  right: 40,
  bottom: 40,
}));
