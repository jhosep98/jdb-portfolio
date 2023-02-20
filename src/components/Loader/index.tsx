import { Metronome } from '@uiball/loaders';
import { Box, useTheme } from '@mui/material';

type LoaderProps = {
  position?: 'static' | 'relative' | 'absolute' | 'sticky';
};

export const Loader: React.FC<LoaderProps> = ({ position = 'absolute' }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position,
        ...(position === 'relative' && {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }),
        ...(position === 'absolute' && {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }),
      }}
    >
      <Metronome size={40} speed={1.6} color={theme.palette.text.primary} />
    </Box>
  );
};