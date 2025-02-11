import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { Box, Fab, Link, List, Tooltip, useTheme } from '@mui/material';
import {
  GridCards,
  IconButtonComponent,
  LayoutCrudRight,
  TimeLineV2,
} from '@wulperstudio/cms';

import { useDrawer } from 'hooks';
import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate, DrawerTemplate } from 'templates';
import {
  BoxContent,
  CardSkill,
  FadeInWhenVisible,
  ListItemSkill,
  TitleSection,
  WrapperText,
} from 'components';

export const SkillsPage: React.FCC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { showDrawer, handleCloseDrawer, handleOpenDrawer } =
    useDrawer<'isOpenWorkDrawer'>(['isOpenWorkDrawer']);

  const { isOpenWorkDrawer } = showDrawer;

  return (
    <LayoutCrudRight
      RootProps={{
        sx: {
          gap: isOpenWorkDrawer ? '10px' : 0,
        },
      }}
      content={
        <BoxContent isContainer>
          <ContainerTemplate>
            <TitleSection
              caption={t('skills.caption')}
              title={t('skills.title')}
            />

            <FadeInWhenVisible>
              <WrapperText text={t('skills.mainContent')} variant="body1" />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <GridCards
                paddingX="1rem"
                paddingY="2rem"
                gap="2rem"
                sx={{ height: 'auto' }}
              >
                <CardSkill
                  title="REACT JS"
                  icon={ICONS_NAME.react}
                  tooltip={t('skills.cards.react')}
                />

                <CardSkill
                  title="HTML"
                  icon={ICONS_NAME.html}
                  tooltip={t('skills.cards.html')}
                />

                <CardSkill
                  title="CSS"
                  icon={ICONS_NAME.css}
                  tooltip={t('skills.cards.css')}
                />

                <CardSkill
                  title="JAVASCRIPT"
                  icon={ICONS_NAME.javascript}
                  tooltip={t('skills.cards.javascript')}
                />

                <CardSkill
                  title="TYPESCRIPT"
                  icon={ICONS_NAME.typescript}
                  tooltip={t('skills.cards.typescript')}
                />

                <CardSkill
                  title="NODE JS"
                  icon={ICONS_NAME.node}
                  tooltip={t('skills.cards.node')}
                />

                <CardSkill
                  title="MATERIAL-UI"
                  icon={ICONS_NAME.material}
                  tooltip={t('skills.cards.material')}
                />
                <CardSkill
                  title="STORYBOOK"
                  icon={ICONS_NAME.storybook}
                  tooltip={t('skills.cards.storybook')}
                />

                <CardSkill
                  title="REACT-QUERY"
                  icon={ICONS_NAME.reactQuery}
                  tooltip={t('skills.cards.reactQuery')}
                />

                <CardSkill
                  title="REACT-ROUTER-DOM"
                  icon={ICONS_NAME.reactRouterDom}
                  tooltip={t('skills.cards.reactRouterDom')}
                />

                <CardSkill
                  title="NEXT JS"
                  icon={ICONS_NAME.next}
                  tooltip={t('skills.cards.next')}
                />

                <CardSkill
                  title="FIGMA"
                  icon={ICONS_NAME.figma}
                  tooltip={t('skills.cards.figma')}
                />
              </GridCards>
            </FadeInWhenVisible>

            <Tooltip title="Work experience" placement="top">
              <Fab
                color="primary"
                size="medium"
                onClick={() =>
                  isOpenWorkDrawer
                    ? handleCloseDrawer('isOpenWorkDrawer')
                    : handleOpenDrawer('isOpenWorkDrawer')
                }
                sx={(theme) => ({
                  position: 'absolute',
                  zIndex: theme.zIndex.fab,
                  right: 40,
                  bottom: 40,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
              >
                <Icon
                  icon={ICONS_NAME.work}
                  color="#fff"
                  width="24"
                  height="24"
                />
              </Fab>
            </Tooltip>
          </ContainerTemplate>
        </BoxContent>
      }
      drawer={
        <>
          {isOpenWorkDrawer && (
            <DrawerTemplate
              width={490}
              open={isOpenWorkDrawer}
              animation={false}
              direction={undefined}
              variant="persistent"
              handleClose={() => handleCloseDrawer('isOpenWorkDrawer')}
              headerDisableGutters
              contentProps={{
                sx: {
                  borderRadius: '10px',
                },
              }}
              contentHeader={{
                title: t('skills.drawer.title'),
                icons: (
                  <IconButtonComponent
                    iconProps={{
                      onClick: () => handleCloseDrawer('isOpenWorkDrawer'),
                    }}
                  >
                    <Icon
                      icon={ICONS_NAME.close}
                      color={theme.palette.text.primary}
                    />
                  </IconButtonComponent>
                ),
              }}
              body={
                <Box>
                  <TimeLineV2
                    items={[
                      {
                        timeLineSeparator: {
                          icon: ICONS_NAME.workOutline,
                          colorIcon: '#fff',
                          timelineDotProps: {
                            sx: {
                              backgroundColor: '#6962FD',
                            },
                          },
                        },

                        timeLineContent: {
                          date: 'Aug 2021 - Present',
                          content: (
                            <>
                              <Link
                                href="https://www.wulperstudio.com/"
                                sx={{
                                  display: 'block',
                                  color: 'text.primary',
                                  fontWeight: 700,
                                }}
                                underline="none"
                                variant="body2"
                                target="_blank"
                              >
                                [Front-end Developer] Wulpers
                              </Link>

                              <List>
                                <ListItemSkill
                                  text={t('skills.drawer.cards.1.listItem1')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.1.listItem2')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.1.listItem3')}
                                />
                              </List>
                            </>
                          ),
                        },
                      },
                      {
                        timeLineSeparator: {
                          icon: ICONS_NAME.workOutline,
                          colorIcon: '#fff',
                          timelineDotProps: {
                            sx: {
                              backgroundColor: '#d1e500',
                            },
                          },
                        },

                        timeLineContent: {
                          date: 'Jul 2023 - Present',
                          content: (
                            <>
                              <Link
                                href="https://www.coderhouse.com/"
                                sx={{
                                  display: 'block',
                                  color: 'text.primary',
                                  fontWeight: 700,
                                }}
                                underline="none"
                                variant="body2"
                                target="_blank"
                              >
                                [Tutor ReactJS] CoderHouse
                              </Link>

                              <List>
                                <ListItemSkill
                                  text={t('skills.drawer.cards.0.listItem1')}
                                />

                                <ListItemSkill
                                  text={t('skills.drawer.cards.0.listItem2')}
                                />
                              </List>
                            </>
                          ),
                        },
                      },
                      {
                        timeLineSeparator: {
                          icon: ICONS_NAME.workOutline,
                          colorIcon: '#fff',
                          timelineDotProps: {
                            sx: {
                              backgroundColor: '#0930B7',
                            },
                          },
                        },

                        timeLineContent: {
                          date: 'May 2021 - Jul 2021',
                          content: (
                            <>
                              <Link
                                href="https://globaltechsa.com.ar/"
                                sx={{
                                  display: 'block',
                                  color: 'text.primary',
                                  fontWeight: 700,
                                }}
                                underline="none"
                                variant="body2"
                                target="_blank"
                              >
                                [Full Stack Developer] GLOBALTECH SCM SOLUTIONS
                                GLOBALTECH SCM SOLUTIONS
                              </Link>

                              <List>
                                <ListItemSkill
                                  text={t('skills.drawer.cards.2.listItem1')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.2.listItem2')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.2.listItem3')}
                                />
                              </List>
                            </>
                          ),
                        },
                      },
                      {
                        timeLineSeparator: {
                          icon: ICONS_NAME.workOutline,
                          colorIcon: '#fff',
                          timelineDotProps: {
                            sx: {
                              backgroundColor: '#55BCF8',
                            },
                          },
                        },

                        timeLineContent: {
                          date: 'Mar 2021 - Apr 2021',
                          content: (
                            <>
                              <Link
                                href="https://www.alkemy.org/"
                                sx={{
                                  display: 'block',
                                  color: 'text.primary',
                                  fontWeight: 700,
                                }}
                                underline="none"
                                variant="body2"
                                target="_blank"
                              >
                                [Full Stack Developer] Alkemy
                              </Link>

                              <List>
                                <ListItemSkill
                                  text={t('skills.drawer.cards.3.listItem1')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.3.listItem2')}
                                />
                                <ListItemSkill
                                  text={t('skills.drawer.cards.3.listItem3')}
                                />
                              </List>
                            </>
                          ),
                        },
                      },
                    ]}
                  />
                </Box>
              }
            />
          )}
        </>
      }
    />
  );
};

export default SkillsPage;
