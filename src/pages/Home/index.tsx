/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/material';

import { WrapperText } from 'components/WrapperText';
import { BlockImageAnimation } from 'components';
import GroovyWalkAnimation from 'assets/animations/Blogging.json';

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const isMqLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Stack
      direction={isMqLg ? 'column-reverse' : 'row'}
      alignItems="center"
      justifyContent="center"
      columnGap="15px"
      sx={{ height: '100%' }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <Box component="figure" sx={{ margin: 0 }}>
          <BlockImageAnimation src={GroovyWalkAnimation} />
        </Box>
      </Box>

      <Box sx={{ maxWidth: 600 }}>
        <WrapperText
          clines={isMqMd ? 7 : 5}
          fontWeight={600}
          lineHeight={isMqLg ? (isMqMd ? '60px' : '70px') : '80px'}
          sx={{ p: '10px' }}
          textAlign={isMqLg ? 'center' : 'left'}
          variant="h2"
          text={(
            <>
              Hi, you found me! I&apos;m a
              {' '}
              <Box component="span" color="primary.main">
                Front-end developer
              </Box>
              {' '}
              from Argentina.
            </>
          )}
        />
      </Box>
    </Stack>
  );
};
