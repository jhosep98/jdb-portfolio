import { useState } from 'react';

export const useDrawer = <T extends string>(uses: T[]) => {
  const [showDrawer, setshowDrawer] = useState<Record<T, boolean>>(() => {
    let initialValues = {};

    uses.forEach((e) => {
      initialValues = {
        ...initialValues,
        [e]: false,
      };
    });
    return initialValues as Record<T, boolean>;
  });

  const handleOpenDrawer = (e: T) => {
    setshowDrawer((prev) => ({
      ...prev,
      [e]: true,
    }));
  };

  const handleCloseDrawer = (e: T) => {
    setshowDrawer((prev) => ({
      ...prev,
      [e]: false,
    }));
  };

  return {
    showDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
  };
};

export type BaseUseDrawer =
  | 'form'
  | 'info'
  | 'filter'
  | 'status'
  | 'notifications'
  | 'products'
  | 'notifications'
  | 'products';

export type BaseModalKanban =
  | 'wrapperModal'
  | 'template'
  | 'communications'
  | 'alert'
  | 'operation';
