import React from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
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
import { generateRoutes } from 'helpers/generateRoutes';
import { CardComment, FadeInWhenVisible, Menu } from 'components';

export const AppLayout: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
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
            maxHeight: '100vh',
            backgroundColor: 'background.paper',
            padding: '10px',
            overflowY: 'auto',
            gridTemplateRows: '1fr',
            '& .child__slot': {
              height: '100%',
              overflowY: 'auto',
            },
            [theme.breakpoints.down('md')]: {
              padding: 0,
            },
          },
        }}
        MenuSlotProps={{
          sx: {
            position: 'sticky',
            top: 0,
            zIndex: theme.zIndex.appBar,
          },
        }}
        menu={
          isMqMd ? (
            <HeaderFlex
              position="sticky"
              sx={{ backgroundImage: 'unset' }}
              isBorder
            >
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
              <FadeInWhenVisible>
                <CardComment
                  name="Carlos Rivero Bianchi"
                  company="Founder & CEO at GLOBALTECH SCM SOLUTIONS, CorpFounder & CEO at GLOBALTECH SCM SOLUTIONS, Corp"
                  description={t('mainDrawer.card_01.description')}
                />
              </FadeInWhenVisible>

              <Divider variant="fullWidth" />

              <FadeInWhenVisible>
                <CardComment
                  name="Moises Perez"
                  company="React | React Native | Redux | I develop user friendly Web and Mobile apps at Effectus Software"
                  description={t('mainDrawer.card_02.description')}
                />
              </FadeInWhenVisible>
            </>
          )}
        />
      )}
    </>
  );
};
