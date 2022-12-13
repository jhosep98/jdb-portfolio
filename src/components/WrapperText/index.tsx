import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface WrapperTextModel extends Omit<TypographyProps, 'component'> {
  text: React.ReactNode;
  component?: React.ElementType;
}

export const WrapperText: React.FCC<WrapperTextModel> = ({ ...props }) => {
  const { color = 'text.primary', text, component = 'p', ...rest } = props;

  return (
    <Typography component={component} color={color} {...rest}>
      {text}
    </Typography>
  );
};
