import React from 'react';
import { InputBoxGroup } from '@wulperstudio/cms';
import { Box, useTheme, Stack, Container } from '@mui/material';

import { Theme } from 'interfaces';
import { ThemeContext } from 'context';
import { values, valuesLayout } from 'data';
import { WrapperButton, WrapperText } from 'components';

export const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const { modeTheme, setTheme } = React.useContext(ThemeContext);

  const handleChange = (theme: Theme) => setTheme(theme);

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: '0 auto',
        height: '100%',
      }}
    >
      <Container>
        <Stack rowGap="25px">
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
              text="We are looking for the document you wre issued when your company was formed in the US."
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
            label="Mode test"
            sizeElement="large"
            variant="outlined"
            defaultValue={modeTheme.mode}
            onChange={(value) => handleChange(value.name)}
            values={values}
          >
            {(value) => <>{value.icon}</>}
          </InputBoxGroup>

          <InputBoxGroup
            values={valuesLayout}
            label="Layout"
            variant="outlined"
            sizeElement="large"
            onChange={() => {}}
            defaultValue="float"
          >
            {(value) => <>{value.icon}</>}
          </InputBoxGroup>

          <WrapperButton
            color="primary"
            sizeVariant="large"
            type="submit"
            variant="contained"
          >
            Save changes
          </WrapperButton>
        </Stack>
      </Container>
    </Box>
  );
};
