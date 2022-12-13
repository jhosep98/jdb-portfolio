import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from 'layouts';
import { AUTH_ROUTES } from 'helpers/routes';
import { AboutPage, HomePage, SettingsPage, SkillsPage } from 'pages';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path={AUTH_ROUTES.home} element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path={AUTH_ROUTES.about} element={<AboutPage />} />
      <Route path={AUTH_ROUTES.skills} element={<SkillsPage />} />
      <Route path={AUTH_ROUTES.settings} element={<SettingsPage />} />
    </Route>
  </Routes>
);
