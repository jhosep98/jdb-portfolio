import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputBoxGroup } from '@wulperstudio/cms';
import { useTheme, Stack, PaletteMode } from '@mui/material';

import { Language } from 'interfaces';
import { useLocalStorage } from 'hooks';
import { ContainerTemplate } from 'templates';
import { LanguageContext, ThemeContext } from 'context';
import { BoxContent, TitleSection, WrapperText } from 'components';
import { paletteModeArgs, languageModeArgs } from './provider';

export const SettingsPage: React.FCC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
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
          <TitleSection
            caption={t('settings.caption')}
            title={t('settings.title')}
          />

          <Stack component="form" rowGap="25px">
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
              onChange={(value) => handleChange(value?.name || "light")}
              defaultValue={
                themeFromLocalStorage === 'light'
                  ? paletteModeArgs.options[0]
                  : paletteModeArgs.options[1]
              }
            />

            <InputBoxGroup
              {...languageModeArgs}
              onChange={(value) => handleChangeLanguage(value?.name || "en")}
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

export default SettingsPage;
