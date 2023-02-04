import React from 'react';
import { Trans } from 'react-i18next';
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

export const HomePage: React.FCC = () => {
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
                    fontWeight={500}
                    textAlign={isMqMd ? 'center' : 'left'}
                    sx={{
                      // wordBreak: 'break-all',
                      letterSpacing: '5px',
                      fontFamily: 'Ubuntu',
                    }}
                    text={(
                      <Trans i18nKey="welcome">
                        Hi, you found me!, I&apos;m Jhosep , I&apos;m
                        {' '}
                        <Box component="strong" sx={{ color: 'primary.main' }}>
                          Front-end.
                        </Box>
                        {' '}
                        developer
                      </Trans>
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
