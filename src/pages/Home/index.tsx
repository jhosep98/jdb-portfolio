/* eslint-disable no-nested-ternary */
import React from 'react';
import { Hero } from '@wulperstudio/cms';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import { BlockImageAnimation, BoxContent, WrapperText } from 'components';
import GroovyWalkAnimation from 'assets/animations/Blogging.json';

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  // const isMqLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <BoxContent isContainer>
      <Hero
        direction="row-reverse"
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        asset={<BlockImageAnimation src={GroovyWalkAnimation} />}
        content={(
          <Box sx={{ py: '10px' }}>
            <WrapperText
              clines={isMqMd ? 7 : 5}
              variant="h1"
              textAlign={isMqMd ? 'center' : 'left'}
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
        )}
      />
    </BoxContent>
  );
};
