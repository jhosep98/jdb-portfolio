import React from 'react';
import { Button, ButtonModel } from '@wulperstudio/cms';

type ISizeVariant = 'small' | 'medium' | 'large';

type ISizeButton = {
  [K in ISizeVariant]: string;
};

interface WrapperButtonModel extends ButtonModel {
  sizeVariant?: ISizeVariant;
}

const sizeButton: ISizeButton = {
  small: '42px',
  medium: '48px',
  large: '58px',
};

export const WrapperButton: React.FCC<WrapperButtonModel> = ({
  children,
  sizeVariant = 'small',
  sx,
  ...props
}) => {
  const { variant = 'contained', color = 'primary', ...rest } = props;

  return (
    <Button
      color={color}
      disableElevation
      variant={variant}
      fullWidth
      sx={{
        minWidth: 140,
        borderRadius: '15px',
        minHeight: sizeButton[sizeVariant],
        fontSize: '16px',
        fontWeight: 500,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
