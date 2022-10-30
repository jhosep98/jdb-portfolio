import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { LayoutMenuContent, MenuResponsive } from '@wulperstudio/cms';

import { Menu } from 'components';
import { generateRoutes } from 'helpers/generateRoutes';
import { MainLayout, BoxHeader } from './styled';

export const AppLayout: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  const routes = React.useMemo(
    () => generateRoutes(navigate, location),
    [location, navigate],
  );

  return (
    <MainLayout>
      <LayoutMenuContent
        columnGap={15}
        rowGap={isMqMd ? 0 : 10}
        menu={
          isMqMd ? (
            <BoxHeader>
              <MenuResponsive options={routes} />
            </BoxHeader>
          ) : (
            <Menu menuList={routes} />
          )
        }
        content={<Outlet />}
      />
    </MainLayout>
  );
};
