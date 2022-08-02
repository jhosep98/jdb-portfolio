import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { AppLayout } from 'Layouts';
import { AUTH_ROUTES } from 'helpers/routes';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={AUTH_ROUTES.home} element={<AppLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);
