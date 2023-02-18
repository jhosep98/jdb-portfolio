/* eslint-disable consistent-return */
import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { Fab, Grid, Stack, Tooltip } from '@mui/material';

import { useGetRepos } from 'hooks';
import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  FadeInWhenVisible,
  IconCounter,
  ListAbout,
  TitleSection,
  WrapperText,
} from 'components';

export const AboutPage: React.FCC = () => {
  const { t } = useTranslation();
  const { queryRepos } = useGetRepos();

  if (queryRepos.isLoading) return <h1>Loading...!</h1>;

  if (queryRepos.isError) return <h1>Error..!</h1>;

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
              <IconCounter
                counter={queryRepos.data?.length}
                icon={ICONS_NAME.commits}
              />

              <IconCounter
                counter={queryRepos.data?.length}
                icon={ICONS_NAME.repository}
              />

              <IconCounter
                counter={queryRepos.data?.length}
                icon={ICONS_NAME.pullRequests}
              />
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
