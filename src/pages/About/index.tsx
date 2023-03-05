/* eslint-disable consistent-return */
import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { Fab, Grid, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import {
  AvatarV2,
  IconButtonComponent,
  LayoutCrudRight,
} from '@wulperstudio/cms';

import { consts } from 'helpers/consts';
import { ICONS_NAME } from 'helpers/icons';
import { useDrawer, useGetUserInfo } from 'hooks';
import { ContainerTemplate, DrawerTemplate } from 'templates';
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
  const theme = useTheme();
  const { t } = useTranslation();
  const { queryUserInfo } = useGetUserInfo();
  const { handleCloseDrawer, handleOpenDrawer, showDrawer } = useDrawer<'githubOverview'>(['githubOverview']);

  const { githubOverview } = showDrawer;

  return (
    <LayoutCrudRight
      RootProps={{
        sx: {
          gap: githubOverview ? '10px' : 0,
        },
      }}
      content={(
        <BoxContent isContainer>
          <ContainerTemplate>
            <TitleSection
              caption={t('about.caption')}
              title={t('about.title')}
            />
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
                onClick={() => handleOpenDrawer('githubOverview')}
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
      )}
      drawer={(
        <>
          {githubOverview && (
            <DrawerTemplate
              width={450}
              animation={false}
              direction={undefined}
              variant="persistent"
              headerDisableGutters
              contentProps={{
                sx: {
                  borderRadius: '10px',
                },
              }}
              open={githubOverview}
              handleClose={() => handleCloseDrawer('githubOverview')}
              contentHeader={{
                title: 'Github Overview',
                icons: (
                  <>
                    <IconButtonComponent
                      iconProps={{
                        onClick: () => handleCloseDrawer('githubOverview'),
                      }}
                    >
                      <Icon
                        icon={ICONS_NAME.close}
                        color={theme.palette.text.primary}
                      />
                    </IconButtonComponent>
                  </>
                ),
              }}
              body={(
                <>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <AvatarV2 src={consts.backgroundImageRandom} />

                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="text.primary"
                    >
                      Jose Davila
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="text.primary"
                    >
                      Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                  </Stack>
                </>
              )}
            />
          )}
        </>
      )}
    />
  );
};
