import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from 'layouts';
import { Loader } from 'components';
import { AUTH_ROUTES } from 'helpers/routes';

const HomePageLazy = React.lazy(() => import('../pages/Home'));
const AboutPageLazy = React.lazy(() => import('../pages/About'));
const SkillsPageLazy = React.lazy(() => import('../pages/Skills'));
const ContactPageLazy = React.lazy(() => import('../pages/Contact'));
const SettingsPageLazy = React.lazy(() => import('../pages/Settings'));

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={AUTH_ROUTES.home} element={<AppLayout />}>
      <Route
        index
        element={(
          <Suspense fallback={<Loader />}>
            <HomePageLazy />
          </Suspense>
        )}
      />
      <Route
        path={AUTH_ROUTES.about}
        element={(
          <Suspense fallback={<Loader />}>
            <AboutPageLazy />
          </Suspense>
        )}
      />
      <Route
        path={AUTH_ROUTES.skills}
        element={(
          <Suspense fallback={<Loader />}>
            <SkillsPageLazy />
          </Suspense>
        )}
      />
      <Route
        path={AUTH_ROUTES.settings}
        element={(
          <Suspense fallback={<Loader />}>
            <SettingsPageLazy />
          </Suspense>
        )}
      />
      <Route
        path={AUTH_ROUTES.contact}
        element={(
          <Suspense fallback={<Loader />}>
            <ContactPageLazy />
          </Suspense>
        )}
      />
    </Route>
  </Routes>
);
