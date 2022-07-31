import React from 'react';
import { LayoutMenuContent } from '@wulperstudio/cms';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu } from 'components';
import { generateRoutes } from 'helpers/generateRoutes';
import { MainLayout } from './styled';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = React.useMemo(
    () => generateRoutes(navigate, location),
    [location, navigate],
  );

  return (
    <MainLayout>
      <LayoutMenuContent
        columnGap={15}
        menu={<Menu menuList={routes} />}
        content={<div>Home Page</div>}
      />
    </MainLayout>
  );
};
