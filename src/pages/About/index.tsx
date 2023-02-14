/* eslint-disable consistent-return */
import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { Fab, Grid, IconButton, Stack, Tooltip, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  FadeInWhenVisible,
  ListAbout,
  TitleSection,
  WrapperText,
} from 'components';

export const AboutPage: React.FCC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [counter, setCounter] = React.useState(0);
  const targetCount = 50;

  React.useEffect(() => {
    if (counter === targetCount) {
      return;
    }

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter, targetCount]);

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection caption={t('about.caption')} title={t('about.title')} />

        <Stack rowGap="2rem" sx={{ py: '1rem' }}>
          <FadeInWhenVisible>
            <WrapperText
              text={t('about.myResumeParagraph1')}
              variant="body1"
              component="p"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Grid item xs={12} md={8}>
              <FadeInWhenVisible>
                <ListAbout />
              </FadeInWhenVisible>
            </Grid>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Stack
              direction="row"
              justifyContent="space-around"
              flexWrap="wrap"
              gap="1rem"
              sx={{ pt: '2rem' }}
            >
              <Stack alignItems="center" justifyContent="center">
                <IconButton aria-label="github">
                  <Icon
                    icon={ICONS_NAME.github}
                    width="50"
                    height="50"
                    color={theme.palette.text.primary}
                  />
                </IconButton>

                <WrapperText
                  text={`+${counter} commits`}
                  fontWeight={600}
                  variant="h5"
                  component="span"
                />
              </Stack>

              <Stack alignItems="center" justifyContent="center">
                <IconButton aria-label="github">
                  <Icon
                    icon={ICONS_NAME.github}
                    width="50"
                    height="50"
                    color={theme.palette.text.primary}
                  />
                </IconButton>

                <WrapperText
                  text="+50 commits"
                  fontWeight={600}
                  variant="h5"
                  component="span"
                />
              </Stack>

              <Stack alignItems="center" justifyContent="center">
                <IconButton aria-label="github">
                  <Icon
                    icon={ICONS_NAME.github}
                    width="50"
                    height="50"
                    color={theme.palette.text.primary}
                  />
                </IconButton>

                <WrapperText
                  text="+50 commits"
                  fontWeight={600}
                  variant="h5"
                  component="span"
                />
              </Stack>
            </Stack>
          </FadeInWhenVisible>
        </Stack>

        <Tooltip title={t('about.fabTooltip')} placement="top">
          <Fab
            color="primary"
            size="medium"
            href="../../assets/cv/jhosep-davila-cv.pdf"
            download
            sx={(theme) => ({
              position: 'absolute',
              zIndex: theme.zIndex.fab,
              right: 40,
              bottom: 40,
            })}
          >
            <Icon
              icon={ICONS_NAME.downloadAnimate}
              color="#fff"
              height="24"
              width="24"
            />
          </Fab>
        </Tooltip>
      </ContainerTemplate>
    </BoxContent>
  );
};
