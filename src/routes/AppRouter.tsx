import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from 'Layouts';
import { AboutPage, HomePage } from 'pages';
import { AUTH_ROUTES } from 'helpers/routes';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={AUTH_ROUTES.home} element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path={AUTH_ROUTES.about} element={<AboutPage />} />

    </Route>
  </Routes>
);
