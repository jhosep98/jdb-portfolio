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
          <CardSkill title="REACT JS" icon={ICONS_NAME.react} />
          <CardSkill title="HTML" icon={ICONS_NAME.html} />
          <CardSkill title="CSS" icon={ICONS_NAME.css} />
          <CardSkill title="JAVASCRIPT" icon={ICONS_NAME.javascript} />
          <CardSkill title="TYPESCRIPT" icon={ICONS_NAME.typescript} />
          <CardSkill title="NODE JS" icon={ICONS_NAME.node} />
          <CardSkill title="MATERIAL-UI" icon={ICONS_NAME.material} />
          <CardSkill title="STORYBOOK" icon={ICONS_NAME.storybook} />
          {/* <CardSkill title="REACT-QUERY" icon={ICONS_NAME.reactQuery} /> */}
          <CardSkill title="NEXT JS" icon={ICONS_NAME.next} />
        </GridCards>
      </ContainerTemplate>
    </BoxContent>
  );
};
