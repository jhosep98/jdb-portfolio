import React from 'react';
import { Icon } from '@iconify/react';
import { IconsPropsModel } from '@wulperstudio/cms';
import { Location, NavigateFunction } from 'react-router-dom';

import { ICONS_NAME } from 'helpers/icons';
import { AUTH_ROUTES } from './routes';

export const generateRoutes = (
  navigate: NavigateFunction,
  location: Location,
): Array<IconsPropsModel> => {
  const ITEMS: Array<IconsPropsModel> = [
    {
      icon: <Icon icon={ICONS_NAME.home} width="24" height="24" />,
      text: 'Home',
      toRoute: () => navigate(AUTH_ROUTES.home),
      active: location.pathname === AUTH_ROUTES.home,
    },
    {
      icon: <Icon icon={ICONS_NAME.person} width="24" height="24" />,
      text: 'About',
      toRoute: () => navigate(AUTH_ROUTES.about),
      active: location.pathname === `/${AUTH_ROUTES.about}`,
    },
    {
      icon: <Icon icon={ICONS_NAME.settings} width="24" height="24" />,
      text: 'About',
      toRoute: () => navigate(AUTH_ROUTES.settings),
      active: location.pathname === `/${AUTH_ROUTES.settings}`,
    },
  ];
  return ITEMS;
};
