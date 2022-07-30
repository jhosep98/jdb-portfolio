import React from 'react';
import { LayoutMenuContent } from '@wulperstudio/cms';

import { MainLayout } from './styled';

export const HomePage: React.FC = () => (
  <MainLayout>
    <LayoutMenuContent
      columnGap={15}
      menu={<header>Menu</header>}
      content={<div>Home Page</div>}
    />
  </MainLayout>
);
