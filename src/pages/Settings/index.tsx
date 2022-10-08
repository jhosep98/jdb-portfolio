import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputBoxGroup } from '@wulperstudio/cms';
import { Box, useTheme, Stack } from '@mui/material';

import { Language, Theme } from 'interfaces';
import { ContainerTemplate } from 'templates';
import { values, valuesLanguage } from 'data';
import { LanguageContext, ThemeContext } from 'context';
import { BoxContent, WrapperButton, WrapperText } from 'components';

export const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const { modeTheme, setTheme } = React.useContext(ThemeContext);
  const { modeLanguage, setLanguage } = React.useContext(LanguageContext);

  const handleChange = (theme: Theme) => setTheme(theme);

  const handleChangeLanguage = (language: Language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <Stack
          component="form"
          rowGap="25px"
          sx={{ maxWidth: 800, margin: '0 auto', height: '100%' }}
        >
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
            label="Theme"
            sizeElement="large"
            variant="outlined"
            defaultValue={modeTheme.mode}
            onChange={(value) => handleChange(value.name)}
            values={values}
          >
            {(value) => <>{value.icon}</>}
          </InputBoxGroup>

          {/* <InputBoxGroup
            values={valuesLayout}
            label="Layout"
            variant="outlined"
            sizeElement="large"
            onChange={() => {}}
            defaultValue="float"
          >
            {(value) => <>{value.icon}</>}
          </InputBoxGroup> */}

          <InputBoxGroup
            values={valuesLanguage}
            label="Language"
            variant="outlined"
            sizeElement="large"
            defaultValue={modeLanguage.language}
            onChange={(value) => handleChangeLanguage(value.name)}
          >
            {(value) => <>{value.icon}</>}
          </InputBoxGroup>

          <WrapperButton
            color="primary"
            sizeVariant="large"
            type="submit"
            variant="contained"
            aria-label="save changes"
          >
            Save changes
          </WrapperButton>
        </Stack>
      </ContainerTemplate>
    </BoxContent>
  );
};
