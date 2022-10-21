import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputBoxGroup } from '@wulperstudio/cms';
import {
  Box,
  useTheme,
  Stack,
  PaletteMode,
  Snackbar,
  Alert,
} from '@mui/material';

import { useDrawer } from 'hooks';
import { Language } from 'interfaces';
import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import { values, valuesLanguage } from 'data';
import { LanguageContext, ThemeContext } from 'context';
import {
  BoxContent,
  WrapperButton,
  WrapperIcon,
  WrapperIconButton,
  WrapperText,
} from 'components';

export const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const { modeTheme, setTheme } = React.useContext(ThemeContext);
  const { modeLanguage, setLanguage } = React.useContext(LanguageContext);
  const { showDrawer, handleCloseDrawer, handleOpenDrawer } = useDrawer<'snackbar'>(['snackbar']);

  const handleChange = (theme: PaletteMode) => setTheme(theme);

  const handleChangeLanguage = (language: Language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const { snackbar } = showDrawer;

  const handleClose = () => handleCloseDrawer('snackbar');

  const handleClick = () => handleOpenDrawer('snackbar');

  const action = (
    <WrapperIconButton iconProps={{ onClick: handleClose }}>
      <WrapperIcon icon={ICONS_NAME.close} color={theme.palette.text.primary} />
    </WrapperIconButton>
  );

  return (
    <>
      <BoxContent isContainer>
        <ContainerTemplate>
          <Stack
            component="form"
            rowGap="25px"
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
              defaultValue={modeTheme}
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
              defaultValue={modeLanguage}
              onChange={(value) => handleChangeLanguage(value.name)}
            >
              {(value) => <>{value.icon}</>}
            </InputBoxGroup>

            <WrapperButton
              color="primary"
              sizeVariant="large"
              variant="contained"
              aria-label="save changes"
              onClick={handleClick}
            >
              Save changes
            </WrapperButton>
          </Stack>
        </ContainerTemplate>
      </BoxContent>

      <Snackbar
        open={snackbar}
        onClose={handleClose}
        action={action}
        color="primary"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Preferences Saved
        </Alert>
      </Snackbar>
    </>
  );
};
