import React from 'react';
import { Container, ContainerProps } from '@mui/material';

export const ContainerTemplate: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  const { sx, ...rest } = props;

  return (
    <Container component="section" sx={{ py: '70px', height: '100%', ...sx }} {...rest}>
      {children}
    </Container>
  );
};
