import React from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Grid, useTheme } from '@mui/material';

import { consts } from 'helpers/consts';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  FadeInWhenVisible,
  ListAbout,
  WrapperText,
} from 'components';
import { ContainerProfile, Profile } from './styled';

export const AboutPage: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <Grid container rowGap={5}>
          <Grid item xs={12}>
            <FadeInWhenVisible>
              <WrapperText
                text={t('about.caption')}
                variant="body2"
                component="span"
                fontWeight={600}
                textTransform="uppercase"
                sx={{
                  '&::after': {
                    content: '" "',
                    width: '120px',
                    height: '1px',
                    display: 'inline-block',
                    background: theme.palette.divider,
                    margin: '4px 10px',
                  },
                }}
              />

              <WrapperText
                text={t('about.title')}
                variant="h3"
                component="h2"
                fontWeight={600}
                textTransform="uppercase"
              />
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12} md={4}>
            <FadeInWhenVisible>
              <ContainerProfile component="figure">
                <Profile src={consts.profilePhoto} alt="profile photo" />
              </ContainerProfile>
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12} md={8}>
            <FadeInWhenVisible>
              <WrapperText
                text={t('about.titleData')}
                variant="h3"
                component="h2"
                fontWeight={600}
                color="primary.main"
              />

              <Grid container>
                <Grid item xs={12}>
                  <ListAbout />
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12}>
            <FadeInWhenVisible>
              <Divider
                sx={{
                  pb: 5,
                  color: 'text.primary',
                  borderColor: theme.palette.primary.main,
                }}
              >
                {t('about.titleMyResume')}
              </Divider>

              <WrapperText
                text={t('about.myResumeParagraph1')}
                variant="h4"
                component="p"
              />
              <br />

              <WrapperText
                text={t('about.myResumeParagraph2')}
                variant="h4"
                component="p"
              />
              <br />

              <WrapperText
                text={t('about.myResumeParagraph3')}
                variant="h4"
                component="p"
              />
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </ContainerTemplate>
    </BoxContent>
  );
};
