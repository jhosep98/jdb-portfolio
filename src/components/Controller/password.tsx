import React, { useState } from 'react';
import { TextFieldV5LabelOut } from '@wulperstudio/cms';
import { IconButton, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';

import { Capitalize } from 'utils';
import { ICONS_NAME } from 'helpers/icons';
import { DEFAULT_REQUIRED_MESSAGE } from 'helpers/consts';
import { WrapperTextField } from 'components/WrapperTextField';

type TextFieldModel = React.ComponentProps<typeof TextFieldV5LabelOut>;

interface TextFieldControllerModel
  extends Omit<TextFieldModel, 'onChange' | 'type'> {
  name: string;
  control: Control<any>;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  errors?: FieldError;
  onChange?: (e: string) => void;
}

export const PasswordFieldController = ({
  name,
  control,
  errors,
  defaultValue = '',
  placeholder = '',
  onChange,
  required = false,
  rules = {
    required,
  },
  label = Capitalize(name, '_'),
  InputProps,
  ...res
}: TextFieldControllerModel) => {
  const { visibilityOff, visibilityOn } = ICONS_NAME;

  const [visibility, setVisibility] = useState<boolean>(false);

  const onChangeVisibility = () => setVisibility((prev) => !prev);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { ref, ...field } }) => (
        <WrapperTextField
          {...field}
          {...res}
          inputRef={ref}
          error={!!errors}
          label={label}
          placeholder={placeholder}
          fullWidth
          boxProps={{sx: {
            width: '100%',
          }}}
          messageError={DEFAULT_REQUIRED_MESSAGE}
          value={field?.value ?? defaultValue}
          onChange={(e) => {
            field.onChange(e);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          type={visibility ? 'text' : 'password'}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onChangeVisibility}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  sx={{ color: 'text.primary' }}
                >
                  <Icon
                    icon={visibility ? visibilityOff : visibilityOn}
                    color="inherit"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
