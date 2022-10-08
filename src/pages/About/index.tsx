import React from 'react';
import { Box, Grid } from '@mui/material';

import { consts } from 'helpers/consts';
import { ContainerTemplate } from 'templates';
import { BoxContent, WrapperText } from 'components';

export const AboutPage: React.FC = () => (
  <BoxContent isContainer>
    <ContainerTemplate>
      <Grid container>
        <Grid item xs={6}>
          <Box component="figure">
            <Box
              component="img"
              src={consts.profilePhoto}
              alt="profile photo"
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <WrapperText
            text="Learn more about me:"
            variant="h3"
            component="h2"
            fontWeight={600}
            textTransform="uppercase"
          />
        </Grid>

        <Grid item xs={12}>
          <WrapperText
            text="Hi, my name's Joseph Davila and I am a front-end developer, self-taught, passionate about the web."
            variant="h4"
            component="p"
          />
        </Grid>
      </Grid>
    </ContainerTemplate>
  </BoxContent>
);
