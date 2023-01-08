import React from 'react';
import { Icon } from '@iconify/react';
import { IconButton, Stack, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import { BoxContent, TitleSection, WrapperText } from 'components';

export const ContactPage: React.FCC = () => {
  const theme = useTheme();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection caption="contact" title="Contact me" />

        <WrapperText text="Social Links" textAlign="center" />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <IconButton aria-label="github">
            <Icon
              icon={ICONS_NAME.github}
              width="34"
              height="34"
              color={theme.palette.text.primary}
            />
          </IconButton>

          <IconButton aria-label="linkedin">
            <Icon
              icon={ICONS_NAME.linkedin}
              width="34"
              height="34"
              color={theme.palette.text.primary}
            />
          </IconButton>

          <IconButton aria-label="email">
            <Icon
              icon={ICONS_NAME.email}
              width="34"
              height="34"
              color={theme.palette.text.primary}
            />
          </IconButton>

          <IconButton aria-label="whatsapp">
            <Icon
              icon={ICONS_NAME.whatsapp}
              width="34"
              height="34"
              color={theme.palette.text.primary}
            />
          </IconButton>
        </Stack>
      </ContainerTemplate>
    </BoxContent>
  );
};
