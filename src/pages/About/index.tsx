import React from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

import { consts } from 'helpers/consts';
import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import { BoxContent, WrapperIcon, WrapperText } from 'components';
import { ContainerProfile, Profile } from './styled';

dayjs.extend(localizedFormat);

export const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <Grid container rowGap={5}>
          <Grid item xs={12}>
            <WrapperText
              text="ABOUT"
              variant="body2"
              component="span"
              fontWeight={600}
              textTransform="uppercase"
              sx={{
                '&::after': {
                  content: '" "',
                  width: '120px',
                  height: '1px',
                  display: 'inline-block',
                  background: theme.palette.primary.main,
                  margin: '4px 10px',
                },
              }}
            />
            <WrapperText
              text="Learn more about me:"
              variant="h3"
              component="h2"
              fontWeight={600}
              textTransform="uppercase"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ContainerProfile component="figure">
              <Profile src={consts.profilePhoto} alt="profile photo" />
            </ContainerProfile>
          </Grid>

          <Grid item xs={12} md={8}>
            <WrapperText
              text="UI/UX & Front-end Developer"
              variant="h3"
              component="h2"
              fontWeight={600}
              color="primary.main"
            />

            <Grid container>
              <Grid item xs={12} sm={6}>
                <List>
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
                </List>
              </Grid>

              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem alignItems="center">
                    <ListItemIcon>
                      <WrapperIcon icon={ICONS_NAME.location} />
                    </ListItemIcon>

                    <ListItemText
                      primaryTypographyProps={{ color: 'text.primary' }}
                      primary="Buenos Aires, Argentina"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <WrapperText
              text="Hi, my name's Joseph Davila and I'm front-end developer, self-taught, passionate about the web."
              variant="h4"
              component="p"
            />
          </Grid>
        </Grid>
      </ContainerTemplate>
    </BoxContent>
  );
};
