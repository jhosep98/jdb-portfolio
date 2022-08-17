import React from 'react';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/material';

import AssetHome from 'assets/programming-home.svg';
import { WrapperText } from 'components/WrapperText';

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      direction={isMqMd ? 'column-reverse' : 'row'}
      alignItems="center"
      columnGap="15px"
      sx={{ height: '100%' }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <Box component="figure" sx={{ margin: 0 }}>
          <Box
            component="img"
            src={AssetHome}
            alt="computer"
            height={500}
            width={600}
          />
        </Box>
      </Box>

      <Box sx={{ maxWidth: 600 }}>
        <WrapperText
          clines={isMqMd ? 7 : 5}
          text={(
            <>
              Hi, you found me! I am a
              {' '}
              <Box component="span" color="primary.main">
                Front-end developer
              </Box>
              {' '}
              from Argentina.
            </>
          )}
          variant="h1"
          fontSize="50px"
          fontWeight={600}
          textAlign={isMqMd ? 'center' : 'left'}
          sx={{ p: '10px' }}
        />
      </Box>
    </Stack>
  );
};
