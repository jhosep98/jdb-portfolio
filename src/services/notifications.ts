import { OptionsObject } from 'notistack';

import { snackbarError, snackbarInfo, snackbarSuccess } from 'helpers/snackbar';

const base: OptionsObject = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  autoHideDuration: 3000,
};

export const notificationOnSuccess = (
  message: string,
  options: OptionsObject = base,
) => {
  snackbarSuccess(message.toUpperCase(), options);
};

export const notificationOnError = (
  message: string,
  options: OptionsObject = base,
) => {
  snackbarError(message.toUpperCase(), options);
};

export const notificationOnInfo = (
  message: string,
  options: OptionsObject = base,
) => {
  snackbarInfo(message.toUpperCase(), options);
};
