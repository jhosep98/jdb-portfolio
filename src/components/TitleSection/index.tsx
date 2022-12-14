import React from 'react';

import { FadeInWhenVisible, WrapperText } from 'components';

interface TitleSectionModel {
  caption: string;
  title: string;
}

export const TitleSection: React.FCC<TitleSectionModel> = ({
  caption,
  title,
}) => (
  <FadeInWhenVisible>
    <WrapperText
      text={caption}
      variant="body2"
      component="span"
      fontWeight={600}
      textTransform="uppercase"
      sx={(theme) => ({
        '&::after': {
          content: '" "',
          width: '120px',
          height: '1px',
          display: 'inline-block',
          background: theme.palette.divider,
          margin: '4px 10px',
        },
      })}
    />

    <WrapperText
      text={title}
      variant="h3"
      component="h2"
      fontWeight={600}
      textTransform="uppercase"
      gutterBottom
    />
  </FadeInWhenVisible>
);
