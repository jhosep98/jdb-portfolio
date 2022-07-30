import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { AUTH_ROUTES } from 'helpers/routes';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={AUTH_ROUTES.home} element={<HomePage />} />
  </Routes>
);
