import { FC } from 'react';
import {
  SnackbarProvider as SnackbarProviderBase,
  SnackbarProviderProps,
  OptionsObject,
  useSnackbar,
  WithSnackbarProps,
} from 'notistack';

let snackbarRef: WithSnackbarProps;
export const SnackbarUtilsConfigurator = () => {
  snackbarRef = useSnackbar();
  return null;
};

export const SnackbarProvider = SnackbarProviderBase as unknown as FC<SnackbarProviderProps>;

const baseStructure: OptionsObject = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  autoHideDuration: 2000,
};

const toast = (msg: string, options: OptionsObject = baseStructure) => {
  snackbarRef?.enqueueSnackbar(msg, options);
};

export const snackbarSuccess = (
  msg: string,
  options: OptionsObject = baseStructure,
) => {
  toast(msg, {
    ...options,
    variant: 'success',
  });
};

export const snackbarError = (
  msg: string,
  options: OptionsObject = baseStructure,
) => {
  toast(msg, {
    ...options,
    variant: 'error',
  });
};

export const warning = (
  msg: string,
  options: OptionsObject = baseStructure,
) => {
  toast(msg, {
    ...options,
    variant: 'warning',
  });
};

export const snackbarInfo = (
  msg: string,
  options: OptionsObject = baseStructure,
) => {
  toast(msg, {
    ...options,
    variant: 'info',
  });
};
