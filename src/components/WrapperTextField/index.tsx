import React from 'react';
import {
  TextFieldV5LabelOut,
  TextFieldV5LabelOutPropsModel,
} from '@wulperstudio/cms';

export const WrapperTextField = (props: TextFieldV5LabelOutPropsModel) => {
  const {
    type = 'text',
    size = 'large',
    variant = 'labelOut',
    ...rest
  } = props;

  return (
    <TextFieldV5LabelOut
      disabledHoverVariantOutAndFlo
      size={size}
      type={type}
      variant={variant}
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
      }}
      WrapperProps={{
        sx: {
          borderRadius: '6px',
          borderColor: 'text.secondary',
          '& div div input': {
            color: 'primary.main',
          },
        },
      }}
      {...rest}
    />
  );
};
