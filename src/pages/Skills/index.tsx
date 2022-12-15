import React from 'react';
import { useTranslation } from 'react-i18next';
import { GridCards } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import { BoxContent, CardSkill, TitleSection, WrapperText } from 'components';

export const SkillsPage: React.FCC = () => {
  const { t } = useTranslation();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection caption={t('skills.caption')} title={t('skills.title')} />

        <WrapperText text={t('skills.mainContent')} />

        <GridCards paddingX="1rem" paddingY="2rem" gap="2rem">
          <CardSkill
            title="REACT JS"
            icon={ICONS_NAME.react}
            tooltip="React is a JavaScript library for building user interfaces."
          />
          <CardSkill title="HTML" icon={ICONS_NAME.html} tooltip="HTML is the standard markup language for documents designed to be displayed in a web browser." />
          <CardSkill title="CSS" icon={ICONS_NAME.css} tooltip="CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML." />
          <CardSkill
            title="JAVASCRIPT"
            icon={ICONS_NAME.javascript}
            tooltip="JavaScript is a scripting or programming language that allows you to implement complex features on web pages"
          />
          <CardSkill
            title="TYPESCRIPT"
            icon={ICONS_NAME.typescript}
            tooltip="TypeScript is a superset of JavaScript, and is designed to help make writing JavaScript easier."
          />
          <CardSkill title="NODE JS" icon={ICONS_NAME.node} tooltip="Node.js is an open-source, cross-platform JavaScript runtime environment." />
          <CardSkill
            title="MATERIAL-UI"
            icon={ICONS_NAME.material}
            tooltip="Material UI is an open-source React component library that implements Google's Material Design."
          />
          <CardSkill title="STORYBOOK" icon={ICONS_NAME.storybook} tooltip="Storybook is a frontend workshop for building UI components and pages in isolation." />
          {/* <CardSkill title="REACT-QUERY" icon={ICONS_NAME.reactQuery} /> */}
          <CardSkill title="NEXT JS" icon={ICONS_NAME.next} tooltip="Next.js is a flexible React framework that gives you building blocks to create fast web applications." />
        </GridCards>
      </ContainerTemplate>
    </BoxContent>
  );
};
