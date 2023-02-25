import React from 'react';
import {
  DrawerV2,
  DrawerVariant,
  HeaderFlex,
  LayoutDrawer,
} from '@wulperstudio/cms';
import { Box, BoxProps, Stack, Typography, useTheme } from '@mui/material';

interface DrawerTemplateModel {
  open: boolean;
  handleClose: () => void;
  body: React.ReactNode;
  footer?: React.ReactNode;
  variant?: DrawerVariant;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  animation?: boolean;
  contentProps?: Omit<
    BoxProps,
    'border' | 'boxShadow' | 'height' | 'width' | 'padding'
  >;
  contentHeader: {
    title: React.ReactNode;
    icons: React.ReactNode | React.ReactNode[];
  };
  headerDisableGutters?: boolean;
}

export const DrawerTemplate: React.FCC<DrawerTemplateModel> = ({
  body,
  contentHeader,
  footer,
  handleClose,
  open,
  animation = true,
  contentProps,
  direction = 'left',
  variant = 'temporary',
  headerDisableGutters,
}) => {
  const theme = useTheme();

  return (
    <DrawerV2
      open={open}
      variant={variant}
      onClose={() => handleClose()}
      direction={direction}
      animation={animation}
      width={420}
      contentProps={{
        sx: {
          borderRadius: 0,
          p: 0,
        },
        ...contentProps,
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
            containerProps={{
              disableGutters: headerDisableGutters,
            }}
            sx={{
              backgroundImage: 'none',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
              >
                {contentHeader.title}
              </Typography>

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
