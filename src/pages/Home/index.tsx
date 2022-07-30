import React from 'react';
import { Icon } from '@iconify/react';
import { LayoutMenuContent } from '@wulperstudio/cms';

import { Menu } from 'components';
import { ICONS_NAME } from 'helpers/icons';
import { MainLayout } from './styled';

export const HomePage: React.FC = () => (
  <MainLayout>
    <LayoutMenuContent
      columnGap={15}
      menu={(
        <Menu
          menuList={[
            {
              text: 'Home',
              icon: <Icon icon={ICONS_NAME.home} width="24" height="24" />,
            },
          ]}
        />
      )}
      content={<div>Home Page</div>}
    />
  </MainLayout>
);
