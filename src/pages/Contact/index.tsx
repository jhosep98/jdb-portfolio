import React from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

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
  WrapperButton,
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
    console.log('!!FORM_DATA: ', data);
    reset();
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
          <WrapperText text={t('contact.subtitle')} textAlign="center" />

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
                '& > div': {
                  mb: '4rem',
                },
              }}
            >
              <Box
                sx={{
                  '& > div': {
                    mb: '1rem',
                  },
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

              <WrapperButton
                type="submit"
                sizeVariant="medium"
                disabled={!isValid}
                fullWidth
              >
                {t('contact.button')}
              </WrapperButton>
            </Box>
          </Box>
        </Stack>
      </ContainerTemplate>
    </BoxContent>
  );
};
