import React from 'react';
import { TextFieldV5LabelOut } from '@wulperstudio/cms';

type TextFieldModel = React.ComponentProps<typeof TextFieldV5LabelOut>;

export const WrapperTextField = (props: TextFieldModel) => {
  const {
    label,
    placeholder = '',
    size = 'large',
    type = 'text',
    variant = 'unfilled',
    ...res
  } = props;

  return (
    <TextFieldV5LabelOut
      type={type}
      label={label}
      size={size}
      variant={variant}
      placeholder={placeholder}
      {...res}
    />
  );
};
