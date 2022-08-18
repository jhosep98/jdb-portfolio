import { Box } from '@mui/material';
import { useLottie } from 'lottie-react';

interface BloqImageAnimationModel<T> {
  src: T;
}

export const BlockImageAnimation = <T, >({
  src,
}: BloqImageAnimationModel<T>) => {
  const options = {
    animationData: src,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      {View}
    </Box>
  );
};
