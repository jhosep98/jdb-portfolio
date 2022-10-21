import React from 'react';
import { IconButtonComponent, IconButtonPropsModel } from '@wulperstudio/cms';

interface WrapperIconButtonModel extends IconButtonPropsModel {}

export const WrapperIconButton: React.FC<WrapperIconButtonModel> = ({
  children,
  ...props
}) => (
  <IconButtonComponent
    iconProps={{
      sx: {
        backgroundColor: 'transparent',
        padding: 0,
      },
    }}
    {...props}
  >
    {children}
  </IconButtonComponent>
);
