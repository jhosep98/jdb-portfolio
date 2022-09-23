import React from 'react';
import { ContentRowBlock, Hero } from '@wulperstudio/cms';
import { Box, useTheme, useMediaQuery } from '@mui/material';

import {
  BlockImageAnimation,
  BoxContent,
  FadeInLeftWhenVisible,
  FadeInWhenVisible,
  WrapperText,
} from 'components';
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
          [theme.breakpoints.down('md')]: {
            py: '70px',
          },
        }}
      >
        <ContentRowBlock
          firstBox={(
            <FadeInWhenVisible>
              <FadeInLeftWhenVisible initialX={-20}>
                <BlockImageAnimation src={GroovyWalkAnimation} />
              </FadeInLeftWhenVisible>
            </FadeInWhenVisible>
          )}
          secondBox={(
            <FadeInWhenVisible>
              <FadeInLeftWhenVisible initialX={20}>
                <Box sx={{ py: '10px' }}>
                  <WrapperText
                    variant="h1"
                    component="h1"
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
              </FadeInLeftWhenVisible>
            </FadeInWhenVisible>
          )}
        />
      </Hero>
    </BoxContent>
  );
};
