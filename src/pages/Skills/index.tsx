import React from 'react';
import { useTranslation } from 'react-i18next';
import { GridCards } from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import { ContainerTemplate } from 'templates';
import {
  BoxContent,
  CardSkill,
  FadeInWhenVisible,
  TitleSection,
  WrapperText,
} from 'components';

export const SkillsPage: React.FCC = () => {
  const { t } = useTranslation();

  return (
    <BoxContent isContainer>
      <ContainerTemplate>
        <TitleSection caption={t('skills.caption')} title={t('skills.title')} />

        <FadeInWhenVisible>
          <WrapperText text={t('skills.mainContent')} variant="body1" />
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <GridCards
            paddingX="1rem"
            paddingY="2rem"
            gap="2rem"
            sx={{ height: 'auto' }}
          >
            <CardSkill
              title="REACT JS"
              icon={ICONS_NAME.react}
              tooltip={t('skills.cards.react')}
            />

            <CardSkill
              title="HTML"
              icon={ICONS_NAME.html}
              tooltip={t('skills.cards.html')}
            />

            <CardSkill
              title="CSS"
              icon={ICONS_NAME.css}
              tooltip={t('skills.cards.css')}
            />

            <CardSkill
              title="JAVASCRIPT"
              icon={ICONS_NAME.javascript}
              tooltip={t('skills.cards.javascript')}
            />

            <CardSkill
              title="TYPESCRIPT"
              icon={ICONS_NAME.typescript}
              tooltip={t('skills.cards.typescript')}
            />

            <CardSkill
              title="NODE JS"
              icon={ICONS_NAME.node}
              tooltip={t('skills.cards.node')}
            />

            <CardSkill
              title="MATERIAL-UI"
              icon={ICONS_NAME.material}
              tooltip={t('skills.cards.material')}
            />
            <CardSkill
              title="STORYBOOK"
              icon={ICONS_NAME.storybook}
              tooltip={t('skills.cards.storybook')}
            />

            <CardSkill
              title="REACT-QUERY"
              icon={ICONS_NAME.reactQuery}
              tooltip={t('skills.cards.reactQuery')}
            />

            <CardSkill
              title="REACT-ROUTER-DOM"
              icon={ICONS_NAME.reactRouterDom}
              tooltip={t('skills.cards.reactRouterDom')}
            />

            <CardSkill
              title="NEXT JS"
              icon={ICONS_NAME.next}
              tooltip={t('skills.cards.next')}
            />
          </GridCards>
        </FadeInWhenVisible>
      </ContainerTemplate>
    </BoxContent>
  );
};
