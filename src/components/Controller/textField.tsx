import React from 'react';
import { Divider } from '@mui/material';
import { TextFieldV5LabelOut } from '@wulperstudio/cms';
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';

import { Capitalize } from 'utils';
import { DEFAULT_REQUIRED_MESSAGE } from 'helpers/consts';
import { WrapperTextField } from 'components/WrapperTextField';

type TextFieldModel = React.ComponentProps<typeof TextFieldV5LabelOut>;

interface TextFieldControllerModel extends Omit<TextFieldModel, 'onChange'> {
  name: string;
  control: Control<any>;
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  errors?: FieldError;
  onChange?: (e: string) => void;
  variantDivider?: boolean;
}

export const TextFieldController = ({
  name,
  control,
  errors,
  defaultValue = '',
  placeholder = '',
  onChange,
  required = false,
  rules = {
    required: {
      value: required,
      message: DEFAULT_REQUIRED_MESSAGE,
    },
  },
  label = Capitalize(name, '_'),
  variant,
  variantDivider,
  ...res
}: TextFieldControllerModel) => (
  <>
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
          variant={variant}
          error={!!errors}
          label={label}
          placeholder={placeholder}
          messageError={errors?.message}
          value={field?.value ?? defaultValue}
          onChange={(e) => {
            field.onChange(e);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          LabelProps={{
            sx: {
              margin: 0,
            },
          }}
        />
      )}
    />

    {variantDivider ? <Divider variant="fullWidth" /> : null}
  </>
);
