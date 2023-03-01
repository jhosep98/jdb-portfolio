/* eslint-disable consistent-return */
import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { Fab, Grid, Stack, Tooltip } from '@mui/material';

import { useGetUserInfo } from 'hooks';
import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  CardAlert,
  FadeInWhenVisible,
  IconCounter,
  ListAbout,
  Loader,
  TitleSection,
  WrapperText,
} from 'components';

export const AboutPage: React.FCC = () => {
  const { t } = useTranslation();
  const { queryUserInfo } = useGetUserInfo();

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

          {queryUserInfo.isError && <CardAlert />}

          {queryUserInfo.isLoading && <Loader position="absolute" />}

          {!queryUserInfo.isLoading && !queryUserInfo.isError && (
            <FadeInWhenVisible>
              <Stack
                direction="row"
                justifyContent="space-around"
                flexWrap="wrap"
                gap="1rem"
                sx={{ pt: '2rem' }}
              >
                <IconCounter
                  counter={queryUserInfo.data?.followers}
                  icon={ICONS_NAME.following}
                  title="Followers"
                />

                <IconCounter
                  counter={queryUserInfo.data?.public_repos}
                  icon={ICONS_NAME.repository}
                  title="Public repos"
                />

                <IconCounter
                  counter={queryUserInfo.data?.following}
                  icon={ICONS_NAME.follower}
                  title="Following"
                />
              </Stack>
            </FadeInWhenVisible>
          )}
        </Stack>

        <Tooltip title="Github Overview" placement="top">
          <Fab
            color="primary"
            size="medium"
            sx={(theme) => ({
              position: 'absolute',
              zIndex: theme.zIndex.fab,
              right: 40,
              bottom: 100,
            })}
          >
            <Icon
              icon={ICONS_NAME.githubAnimate}
              color="#fff"
              height="24"
              width="24"
            />
          </Fab>
        </Tooltip>

        <Tooltip title={t('about.fabTooltip')} placement="bottom">
          <Fab
            color="primary"
            size="medium"
            href="https://drive.google.com/file/d/1_yIBYUfmO9kV1MLcGgWH7x0BeIps0qE2/view?usp=sharing"
            target="_blank"
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
