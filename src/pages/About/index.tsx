/* eslint-disable consistent-return */
import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Divider,
  Fab,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import {
  AvatarV2,
  CardFlexible,
  IconButtonComponent,
  LayoutCrudRight,
  TextForLinesOutput,
  TextMultiline,
} from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import { useDrawer, useGetRepos, useGetUserInfo } from 'hooks';
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
import dayjs from 'dayjs';

export const AboutPage: React.FCC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { queryRepos } = useGetRepos();
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
                    <AvatarV2
                      src={queryUserInfo.data?.avatar_url}
                      sx={{
                        '&.MuiAvatar-root': {
                          width: 90,
                          height: 90,
                        },
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={600}
                      color="text.primary"
                    >
                      {queryUserInfo.data?.name}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="text.secondary"
                    >
                      {queryUserInfo.data?.company}
                    </Typography>
                  </Stack>

                  <TextMultiline
                    label="Bio"
                    text={queryUserInfo.data?.bio}
                    backgroundColor
                    typographyProps={{ color: 'text.primary' }}
                  />

                  <Divider />

                  <TextMultiline
                    label="Location"
                    text={queryUserInfo.data?.location}
                    backgroundColor
                    typographyProps={{ color: 'text.primary' }}
                  />

                  <Divider />

                  <TextMultiline
                    label="Created at"
                    text={dayjs(queryUserInfo.data?.created_at!).format(
                      'MMMM D, YYYY',
                    )}
                    backgroundColor
                    typographyProps={{ color: 'text.primary' }}
                  />

                  <Divider />

                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    fontWeight={600}
                  >
                    Repos
                  </Typography>

                  {queryRepos?.data?.map((repo) => (
                    <Box key={repo.id}>
                      <CardFlexible
                        border={`1px solid ${theme.palette.divider}`}
                        disabledHover
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1.5rem',
                        }}
                      >
                        <Box>
                          <Typography
                            color="text.primary"
                            sx={{
                              '&:first-letter': {
                                textTransform: 'uppercase',
                              },
                            }}
                          >
                            {repo.name}
                          </Typography>

                          <Box>
                            <TextForLinesOutput
                              clines={2}
                              color="text.secondary"
                              text={repo.description}
                              variant="body2"
                            />
                          </Box>
                        </Box>

                        <IconButtonComponent
                          iconProps={{
                            sx: {
                              boxShadow: theme.shadows[1],
                            },
                            onClick: () => window.open(repo.html_url, '_blank'),
                          }}
                        >
                          <Icon
                            icon={ICONS_NAME.arrowRight}
                            color={theme.palette.primary.main}
                          />
                        </IconButtonComponent>
                      </CardFlexible>

                      <Divider />
                    </Box>
                  ))}
                </>
              )}
            />
          )}
        </>
      )}
    />
  );
};
