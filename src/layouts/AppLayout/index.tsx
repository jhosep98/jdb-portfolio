import React from 'react';
import { Icon } from '@iconify/react';
import { Divider, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  HeaderFlex,
  IconButtonComponent,
  LayoutMenuContent,
  MenuResponsive,
} from '@wulperstudio/cms';

import { DrawerTemplate } from 'templates';
import { ICONS_NAME } from 'helpers/icons';
import { DrawerStateContext } from 'context';
import { CardComment, Menu } from 'components';
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
              <CardComment
                name="Carlos Rivero Bianchi"
                company="Founder & CEO at GLOBALTECH SCM SOLUTIONS, CorpFounder & CEO at GLOBALTECH SCM SOLUTIONS, Corp"
                description="Tuvimos la oportunidad de trabajar con Jhosep en nuestro equipo de desarrollo. Es una excelente persona, muy comprometida con los objetivos y resolutiva aceptando cualquier desafio que se le asigna. "
              />

              <Divider variant="fullWidth" />

              <CardComment
                name="Moises Perez"
                company="React | React Native | Redux | I develop user friendly Web and Mobile apps at Effectus Software"
                description="Jhosep is a great developer! I loved working with him during our time in Alkemy. I recommend Jhosep for any organization, I'm sure he would be a very valuable asset to the team."
              />
            </>
          )}
        />
      )}
    </>
  );
};
