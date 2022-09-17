import React from 'react';
import { ContentRowBlock, Hero } from '@wulperstudio/cms';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import { BlockImageAnimation, BoxContent, WrapperText } from 'components';
import GroovyWalkAnimation from 'assets/animations/Blogging.json';

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BoxContent isContainer>
      <Hero
        sx={{
          height: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <ContentRowBlock
          firstBox={<BlockImageAnimation src={GroovyWalkAnimation} />}
          secondBox={(
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
      </Hero>
    </BoxContent>
  );
};
