/* eslint-disable implicit-arrow-linebreak */
import React from 'react';

export interface DrawerStateModel {
  comments: boolean;
  handleDrawerComments: () => void;
}

export const DrawerStateContext = React.createContext({} as DrawerStateModel);

export const DrawerStateProvider: React.FCC = ({ children }) => {
  const [drawerState, setDrawerState] = React.useState(false);

  const handleDrawerComments = () => setDrawerState((prev) => !prev);

  const value = React.useMemo(
    () => ({
      comments: drawerState,
      handleDrawerComments,
    }),
    [drawerState, handleDrawerComments],
  );

  return (
    <DrawerStateContext.Provider value={value}>
      {children}
    </DrawerStateContext.Provider>
  );
};
