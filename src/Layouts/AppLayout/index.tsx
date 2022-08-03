import React from 'react';
import { LayoutMenuContent } from '@wulperstudio/cms';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import { BoxContent, Menu } from 'components';
import { generateRoutes } from 'helpers/generateRoutes';
import { MainLayout } from './styled';

export const AppLayout: React.FC = () => {
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
        content={(
          <BoxContent>
            <Outlet />
          </BoxContent>
        )}
      />
    </MainLayout>
  );
};
