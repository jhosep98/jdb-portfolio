import React from 'react';
import { Divider, Grid, useTheme } from '@mui/material';

import { consts } from 'helpers/consts';
import { ContainerTemplate } from 'templates';
import { BoxContent, FadeInWhenVisible, ListAbout, WrapperText } from 'components';
import { ContainerProfile, Profile } from './styled';

export const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <Grid container rowGap={5}>
          <Grid item xs={12}>
            <FadeInWhenVisible>
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
                    background: theme.palette.divider,
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
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12} md={4}>
            <FadeInWhenVisible>
              <ContainerProfile component="figure">
                <Profile src={consts.profilePhoto} alt="profile photo" />
              </ContainerProfile>
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12} md={8}>
            <FadeInWhenVisible>
              <WrapperText
                text="UI/UX & Front-end Developer"
                variant="h3"
                component="h2"
                fontWeight={600}
                color="primary.main"
              />

              <Grid container>
                <Grid item xs={12}>
                  <ListAbout />
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>

          <Grid item xs={12}>
            <FadeInWhenVisible>

              <Divider sx={{pb: 5, color: 'text.primary', borderColor: theme.palette.primary.main}}>My resume</Divider>

              <WrapperText
                text={(
                  <>
                    Hi, my name&apos;s Joseph Davila and I&apos;m a front-end
                    developer, self-taught, passionate about the web, with more
                    than 1 year of experience, working with technologies such as
                    {' '}
                    <b>React</b>
                    ,
                    {' '}
                    <b>Typescript</b>
                    ,
                    {' '}
                    <b>Next Js</b>
                    ,
                    {' '}
                    <b>Storybook</b>
                    {' '}
                    and
                    {' '}
                    <b>Figma</b>
                    .
                  </>
              )}
                variant="h4"
                component="p"
              />
              <br />

              <WrapperText
                text="Actually, studying English with Nulinga, a platform online. In October I will start the computer science degree at the University of Palermo, to be able to delve into the fundamentals of computing and continue to grow as a
              professional in this exciting world of technology."
                variant="h4"
                component="p"
              />
              <br />

              <WrapperText
                text="I’m from Peruvian, but actually live in Buenos Aires, Argentina since for more than 3 years, I like soccer, anime and computer games."
                variant="h4"
                component="p"
              />

            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </ContainerTemplate>
    </BoxContent>
  );
};
