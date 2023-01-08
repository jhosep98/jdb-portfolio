import React from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { Box, Divider, IconButton, Stack, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  DEFAULT_EMAIL_MESSAGE,
  DEFAULT_REQUIRED_MESSAGE,
} from 'helpers/consts';
import {
  BoxContent,
  TextFieldController,
  TitleSection,
  WrapperText,
} from 'components';
import { WrapperButton } from '../../components/WrapperButton/index';

export type InputSendEmail = {
  name: string;
  email: string;
  message: string;
};

export const ContactPage: React.FCC = () => {
  const theme = useTheme();
  const {
    control,
    formState: { isValid, errors },
  } = useForm<InputSendEmail>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

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

        <Divider>
          <WrapperText text="Or send an email" />
        </Divider>

        <Box
          component="form"
          sx={{
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <TextFieldController
            control={control}
            errors={errors.name}
            label="NOMBRE COMPLETO"
            name="name"
            placeholder="Nombre"
            variant="outlined"
            required
            rules={{
              required: DEFAULT_REQUIRED_MESSAGE,
            }}
          />

          <TextFieldController
            control={control}
            errors={errors.email}
            label="EMAIL"
            variant="outlined"
            name="email"
            placeholder="Correo electrónico"
            required
            type="email"
            rules={{
              required: DEFAULT_REQUIRED_MESSAGE,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: DEFAULT_EMAIL_MESSAGE,
              },
            }}
          />

          <TextFieldController
            control={control}
            errors={errors.message}
            label="Message"
            name="message"
            placeholder="Enter your message"
            multiline
            variant="outlined"
            required
            rules={{
              required: DEFAULT_REQUIRED_MESSAGE,
            }}
          />

          <WrapperButton type="submit" sizeVariant="medium" disabled={!isValid}>
            Send
          </WrapperButton>
        </Box>
      </ContainerTemplate>
    </BoxContent>
  );
};
