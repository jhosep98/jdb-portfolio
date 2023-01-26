import React from 'react';
import { Tooltip } from '@mui/material';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  FadeInWhenVisible,
  TitleSection,
  WrapperText,
} from 'components';
import { DownloadFab } from './styled';

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
          <DownloadFab color="primary" size="medium">
            <Icon icon={ICONS_NAME.downloadAnimate} height="24" width="24" />
          </DownloadFab>
        </Tooltip>
      </ContainerTemplate>
    </BoxContent>
  );
};
