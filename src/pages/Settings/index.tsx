import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputBoxGroup } from '@wulperstudio/cms';
import {
  Box,
  useTheme,
  Stack,
  PaletteMode,
} from '@mui/material';

import { Language } from 'interfaces';
import { ContainerTemplate } from 'templates';
import { useLocalStorage } from 'hooks';
import { LanguageContext, ThemeContext } from 'context';
import { BoxContent, WrapperText } from 'components';
import { paletteModeArgs, languageModeArgs } from './provider';

export const SettingsPage: React.FCC = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const { setTheme } = React.useContext(ThemeContext);
  const { setLanguage } = React.useContext(LanguageContext);
  const [themeFromLocalStorage] = useLocalStorage<PaletteMode>(
    'theme',
    'light',
  );
  const [languageFromLocalStorage] = useLocalStorage<Language>(
    'language',
    'en',
  );

  const handleChange = (theme: PaletteMode) => setTheme(theme);

  const handleChangeLanguage = (language: Language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <BoxContent isContainer>
        <ContainerTemplate>
          <Stack component="form" rowGap="25px">
            <Box>
              <WrapperText
                text="Settings"
                variant="h3"
                fontWeight="700"
                sx={{ py: '10px' }}
              />

              <WrapperText
                fontWeight="400"
                color={theme.palette.text.secondary}
                variant="body1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit aliquet turpis, ut placerat mauris posuere eu. Vestibulum et leo pellentesque, hendrerit urna in, dignissim nisi."
              />
            </Box>

            <WrapperText
              text="Appeareance"
              fontWeight="600"
              fontSize="16px"
              color={theme.palette.primary.main}
              sx={{
                margin: '21px 0px 10px 0px',
              }}
            />

            <InputBoxGroup
              {...paletteModeArgs}
              onChange={(value) => handleChange(value.name)}
              defaultValue={
                themeFromLocalStorage === 'light'
                  ? paletteModeArgs.options[0]
                  : paletteModeArgs.options[1]
              }
            />

            <InputBoxGroup
              {...languageModeArgs}
              onChange={(value) => handleChangeLanguage(value.name)}
              defaultValue={
                languageFromLocalStorage === 'en'
                  ? languageModeArgs.options[0]
                  : languageModeArgs.options[1]
              }
            />
          </Stack>
        </ContainerTemplate>
      </BoxContent>
    </>
  );
};
