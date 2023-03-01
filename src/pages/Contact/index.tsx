import React from 'react';
import emailjs from 'emailjs-com';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import { notificationOnError, notificationOnSuccess } from 'services';
import {
  DEFAULT_EMAIL_MESSAGE,
  DEFAULT_REQUIRED_MESSAGE,
} from 'helpers/consts';
import {
  BoxContent,
  TextFieldController,
  TitleSection,
  WrapperText,
  WrapperButton,
  FadeInWhenVisible,
} from 'components';

export type InputSendEmail = {
  name: string;
  email: string;
  message: string;
};

export const ContactPage: React.FCC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<InputSendEmail>({
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const onSubmit = (data: InputSendEmail) => {
    emailjs
      .send(
        'gmail',
        'personal_site_contact',
        data,
        'user_DuZ1yXYcXYbrSeIsLDeMX',
      )
      .then(() => {
        notificationOnSuccess(t('contact.messageSendEmail'));
        reset();
      })
      .catch((err) => {
        notificationOnError(err.text);
        reset();
      });
  };

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection
          caption={t('contact.caption')}
          title={t('contact.title')}
        />

        <Stack
          gap={isMqMd ? '1.5rem' : '3rem'}
          sx={{
            alignItems: 'stretch',
            mt: theme.spacing(5),
            [theme.breakpoints.down('md')]: { mt: '2.5rem' },
          }}
        >
          <FadeInWhenVisible>
            <WrapperText text={t('contact.subtitle')} textAlign="center" />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap="1rem"
            >
              <IconButton
                aria-label="github"
                href="https://github.com/jhosep98"
                target="_blank"
              >
                <Icon
                  icon={ICONS_NAME.github}
                  width="34"
                  height="34"
                  color={theme.palette.text.primary}
                />
              </IconButton>

              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/in/jhosep-davila/"
                target="_blank"
              >
                <Icon
                  icon={ICONS_NAME.linkedin}
                  width="34"
                  height="34"
                  color={theme.palette.text.primary}
                />
              </IconButton>

              <IconButton
                aria-label="email"
                href="mailto:jhosepdb149@gmail.com"
              >
                <Icon
                  icon={ICONS_NAME.email}
                  width="34"
                  height="34"
                  color={theme.palette.text.primary}
                />
              </IconButton>

            </Stack>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Box>
              <WrapperText
                text={t('contact.subtitle2')}
                textAlign="center"
                gutterBottom
                sx={{ mb: '2rem' }}
              />

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  maxWidth: 600,
                  ml: 'auto',
                  mr: 'auto',
                  [theme.breakpoints.down('md')]: {
                    '&:last-child': {
                      mb: 0,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    '& > div': {
                      mb: '1rem',
                    },
                    pb: '50px',
                  }}
                >
                  <TextFieldController
                    control={control}
                    errors={errors.name}
                    label={t('contact.name.label')}
                    name="name"
                    placeholder={t('contact.name.placeholder')}
                    variant="outlined"
                    autoComplete="off"
                    required
                    rules={{
                      required: DEFAULT_REQUIRED_MESSAGE,
                    }}
                  />

                  <TextFieldController
                    control={control}
                    errors={errors.email}
                    label={t('contact.email.label')}
                    variant="outlined"
                    name="email"
                    placeholder={t('contact.email.placeholder')}
                    required
                    autoComplete="off"
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
                    label={t('contact.message.label')}
                    name="message"
                    placeholder={t('contact.message.placeholder')}
                    multiline
                    variant="outlined"
                    required
                    sx={{ minHeight: 150 }}
                    rules={{
                      required: DEFAULT_REQUIRED_MESSAGE,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      position: 'fixed',
                      right: 0,
                      left: 0,
                      bottom: 0,
                      px: '1rem',
                      py: '1rem',
                      mb: 0,
                      backgroundColor: 'background.default',
                      zIndex: theme.zIndex.fab,
                    },
                  }}
                >
                  <WrapperButton
                    type="submit"
                    sizeVariant="large"
                    disabled={!isValid}
                    fullWidth
                  >
                    {t('contact.button')}
                  </WrapperButton>
                </Box>
              </Box>
            </Box>
          </FadeInWhenVisible>
        </Stack>
      </ContainerTemplate>
    </BoxContent>
  );
};
