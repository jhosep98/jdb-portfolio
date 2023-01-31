import React from 'react';
import { Icon } from '@iconify/react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  CardFlexible,
  HeaderFlex,
  IconButtonComponent,
  LayoutMenuContent,
  MenuResponsive,
} from '@wulperstudio/cms';

import { Menu } from 'components';
import { DrawerTemplate } from 'templates';
import { ICONS_NAME } from 'helpers/icons';
import { DrawerStateContext } from 'context';
import { generateRoutes } from 'helpers/generateRoutes';

export const AppLayout: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = React.useState(false);
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const { comments, handleDrawerComments } = React.useContext(DrawerStateContext);

  const handleMenuOpen = () => setOpenMenu((prev) => !prev);

  const routes = React.useMemo(
    () => generateRoutes(navigate, location, theme, handleDrawerComments),
    [location, navigate],
  );

  return (
    <>
      <LayoutMenuContent
        RootProps={{
          sx: {
            minHeight: '100vh',
            backgroundColor: 'background.paper',
            padding: '10px',
            [theme.breakpoints.down('md')]: {
              padding: 0,
            },
          },
        }}
        MenuSlotProps={{
          sx: {
            position: 'sticky',
            top: 0,
            overflow: 'unset',
            zIndex: theme.zIndex.appBar,
          },
        }}
        menu={
          isMqMd ? (
            <HeaderFlex position="sticky" sx={{ backgroundImage: 'unset' }}>
              <MenuResponsive
                handleMenuOpen={handleMenuOpen}
                openMenu={openMenu}
                options={routes}
              />
            </HeaderFlex>
          ) : (
            <Menu menuList={routes} />
          )
        }
      >
        <Outlet />
      </LayoutMenuContent>

      {comments && (
        <DrawerTemplate
          open={comments}
          handleClose={() => handleDrawerComments()}
          contentHeader={{
            title: 'Comments',
            icons: (
              <IconButtonComponent
                iconProps={{
                  onClick: () => handleDrawerComments(),
                }}
              >
                <Icon
                  icon={ICONS_NAME.close}
                  color={theme.palette.text.primary}
                />
              </IconButtonComponent>
            ),
          }}
          body={(
            <>
              <CardFlexible>A</CardFlexible>

              <CardFlexible>B</CardFlexible>
            </>
          )}
        />
      )}
    </>
  );
};
