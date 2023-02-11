import React from 'react';
import { Container, ContainerProps, useTheme } from '@mui/material';

export const ContainerTemplate: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const { sx, ...rest } = props;

  return (
    <Container
      component="section"
      sx={{
        py: '75px',
        height: '100%',
        overflowY: 'auto',
        [theme.breakpoints.down('md')]: {
          py: '35px',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};
