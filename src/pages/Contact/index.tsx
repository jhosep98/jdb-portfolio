import React from 'react';

import { ContainerTemplate } from 'templates';
import { BoxContent, TitleSection } from 'components';

export const ContactPage: React.FCC = () => (
  <BoxContent isContainer>
    <ContainerTemplate>
      <TitleSection caption="contact" title="Contact me" />
    </ContainerTemplate>
  </BoxContent>
);
