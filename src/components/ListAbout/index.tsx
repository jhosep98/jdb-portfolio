import React from 'react';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { WrapperIcon } from 'components/WrapperIcon';
import { WrapperButton } from 'components/WrapperButton';

dayjs.extend(localizedFormat);

export const ListAbout: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <List
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(auto, 2)',
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr',
          gridAutoRows: 'auto',
        },
      }}
    >
      <ListItem alignItems="center">
        <ListItemIcon>
          <WrapperIcon icon={ICONS_NAME.person} />
        </ListItemIcon>

        <ListItemText
          primaryTypographyProps={{ color: 'text.primary' }}
          primary="Jhosep Davila Bustamante"
        />
      </ListItem>

      <ListItem alignItems="center">
        <ListItemIcon>
          <WrapperIcon icon={ICONS_NAME.email} />
        </ListItemIcon>

        <ListItemText
          primaryTypographyProps={{ color: 'text.primary' }}
          primary="jhosepdb149@gmail.com"
        />
      </ListItem>

      <ListItem alignItems="center">
        <ListItemIcon>
          <WrapperIcon icon={ICONS_NAME.cake} />
        </ListItemIcon>

        <ListItemText
          primaryTypographyProps={{ color: 'text.primary' }}
          primary={dayjs('04/29/1998').format('LL')}
        />
      </ListItem>

      <ListItem alignItems="center">
        <ListItemIcon>
          <WrapperIcon icon={ICONS_NAME.location} />
        </ListItemIcon>

        <ListItemText
          primaryTypographyProps={{ color: 'text.primary' }}
          primary="Buenos Aires, Argentina"
        />
      </ListItem>

      <ListItem alignItems="center">
        <WrapperButton
          variant="outlined"
          sizeVariant="medium"
          sx={{ maxWidth: 'max-content', display: 'flex', alignItems: 'center' }}
          endIcon={<Icon icon={ICONS_NAME.download} height="24" width="24" />}
        >
          {t('about.buttonCv')}
        </WrapperButton>
      </ListItem>
    </List>
  );
};
