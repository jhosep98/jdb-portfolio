import React from 'react';
import { Icon } from '@iconify/react';
import { Fab, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  FadeInWhenVisible,
  TitleSection,
  WrapperText,
} from 'components';

export const AboutPage: React.FCC = () => {
  const { t } = useTranslation();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection caption={t('about.caption')} title={t('about.title')} />

        <FadeInWhenVisible>
          <WrapperText
            text={t('about.myResumeParagraph1')}
            variant="h4"
            component="p"
          />
        </FadeInWhenVisible>

        {/* <Grid item xs={12} md={8}>
            <FadeInWhenVisible>
              <ListAbout />
            </FadeInWhenVisible>
          </Grid> */}

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
