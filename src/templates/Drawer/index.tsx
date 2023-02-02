import React from 'react';
import {
  DrawerV2,
  HeaderFlex,
  LayoutDrawer,
  TextForLinesOutput,
} from '@wulperstudio/cms';
import { Box, Stack, useTheme } from '@mui/material';

interface DrawerTemplateModel {
  open: boolean;
  handleClose: () => void;
  body: React.ReactNode;
  footer?: React.ReactNode;
  contentHeader: {
    title: React.ReactNode;
    icons: React.ReactNode | React.ReactNode[];
  };
}

export const DrawerTemplate: React.FCC<DrawerTemplateModel> = ({
  body,
  contentHeader,
  footer,
  handleClose,
  open,
}) => {
  const theme = useTheme();

  return (
    <DrawerV2
      open={open}
      variant="temporary"
      onClose={() => handleClose()}
      direction="left"
      animation
      width={375}
      contentProps={{
        sx: {
          borderRadius: 0,
          p: 0,
        },
      }}
    >
      <LayoutDrawer
        rowGap="15px"
        padding="0px"
        header={(
          <HeaderFlex
            isBorder
            position="relative"
            backgroundColor={theme.palette.background.default}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <TextForLinesOutput
                  clines={1}
                  text={contentHeader.title}
                  fontSize="18px"
                  fontWeight="600"
                  color="text.primary"
                />
              </div>

              <Stack direction="row" alignItems="center" gap="1rem">
                {contentHeader.icons}
              </Stack>
            </Stack>
          </HeaderFlex>
        )}
        body={(
          <Box
            className="ContentDrawerTemplate__body"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '1rem',
              height: '100%',
              width: '100%',
              px: '1rem',
              pt: '1rem',
            }}
          >
            {body}
          </Box>
        )}
        footer={
          footer ? (
            <Box
              sx={{
                backgroundColor: 'background.default',
                pt: '10px',
                width: '100%',
              }}
            >
              {footer}
            </Box>
          ) : undefined
        }
      />
    </DrawerV2>
  );
};
