import React from 'react';
import { Icon } from '@iconify/react';
import { InputBoxGroup } from '@wulperstudio/cms';
import { Box, useTheme, Stack } from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { WrapperButton, WrapperText } from 'components';

export const SettingsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: '0 auto',
        height: '100%',
      }}
    >
      <Stack
        rowGap="25px"
        sx={{
          height: '100%',
          overflow: 'auto',
        }}
      >
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

          <Box>
            <InputBoxGroup
              label="Mode test"
              sizeElement="large"
              variant="outlined"
              defaultValue="light"
              onChange={() => {}}
              values={[
                {
                  id: 'light',
                  name: 'light',
                  icon: (
                    <Icon
                      icon={ICONS_NAME.themeLight}
                      color="inherit"
                      width="24"
                    />
                  ),
                },
                {
                  id: 'dark',
                  name: 'dark',
                  icon: (
                    <Icon
                      icon={ICONS_NAME.themeDark}
                      color="inherit"
                      width="24"
                    />
                  ),
                },
              ]}
            >
              {(value) => <>{value.icon}</>}
            </InputBoxGroup>
          </Box>

          <Box>
            <InputBoxGroup
              values={[
                {
                  id: 'float',
                  name: 'float',
                  icon: (
                    <Icon
                      icon="lucide:layout-template"
                      color="inherit"
                      width="24"
                    />
                  ),
                },
                {
                  id: 'divider',
                  name: 'divider',
                  icon: (
                    <Icon icon="lucide:layout" color="inherit" width="24" />
                  ),
                },
              ]}
              label="Layout"
              variant="outlined"
              sizeElement="large"
              onChange={() => {}}
              defaultValue="float"
            >
              {(value) => <>{value.icon}</>}
            </InputBoxGroup>
          </Box>
        </Stack>

        <WrapperButton
          color="primary"
          sizeVariant="large"
          type="button"
          variant="contained"
        >
          Save changes
        </WrapperButton>
      </Stack>
    </Box>
  );
};
