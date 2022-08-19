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
  small: '40px',
  medium: '50px',
  large: '55px',
};

export const WrapperButton: React.FC<WrapperButtonModel> = ({
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
        borderRadius: '100px',
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
