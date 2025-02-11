import React from 'react';
import Typed from 'typed.js';
// import { CTAWidget } from '@wulperstudio/cta';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const spanRef = React.useRef<HTMLSpanElement | null>(null);
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    const typed = new Typed(spanRef?.current!, {
      strings: [t('home.front'), t('home.ui')],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
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
            firstBox={
              <FadeInWhenVisible>
                <FadeInLeftWhenVisible initialX={-20}>
                  <BlockImageAnimation src={GroovyWalkAnimation} />
                </FadeInLeftWhenVisible>
              </FadeInWhenVisible>
            }
            secondBox={
              <FadeInWhenVisible>
                <FadeInLeftWhenVisible initialX={20}>
                  <Box sx={{ py: '10px' }}>
                    <WrapperText
                      variant="h1"
                      component="h1"
                      fontWeight={500}
                      textAlign={isMqMd ? 'center' : 'left'}
                      sx={{
                        letterSpacing: '5px',
                        fontFamily: 'Ubuntu',
                        '& .typed-cursor': {
                          color: 'primary.main',
                        },
                        [theme.breakpoints.down('md')]: {
                          wordBreak: 'break-all',
                        },
                      }}
                      text={
                        <>
                          {t('welcome')}{' '}
                          <Box
                            component="span"
                            sx={{ color: 'primary.main' }}
                            ref={spanRef}
                          />
                        </>
                      }
                    />
                  </Box>
                </FadeInLeftWhenVisible>
              </FadeInWhenVisible>
            }
          />
        </Hero>
      </BoxContent>

      {/* <CTAWidget cta_preference="43ced3b1-2509-47fe-9170-5281019879f6" /> */}
    </>
  );
};

export default HomePage;
