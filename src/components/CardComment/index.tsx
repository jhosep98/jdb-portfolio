import React from 'react';
import { Avatar, Box, Tooltip } from '@mui/material';
import { CardFlexible, TextForLinesOutput } from '@wulperstudio/cms';

import { stringAvatar } from 'utils';
import { WrapperText } from 'components/WrapperText';

interface CardCommentModel {
  name: string;
  company: string;
  description: string;
}

export const CardComment: React.FCC<CardCommentModel> = ({
  name,
  company,
  description,
}) => (
  <CardFlexible sx={{ '&:hover': { boxShadow: 'none' } }}>
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <Avatar
        {...stringAvatar(name)}
        variant="rounded"
        sx={{ width: 48, height: 48 }}
      />

      <Box>
        <WrapperText text={name} variant="h6" fontWeight={600} />

        <Tooltip title={company}>
          <Box sx={{ mb: '.4rem' }}>
            <TextForLinesOutput
              text={company}
              fontWeight={500}
              variant="body1"
              clines={2}
              color="text.primary"
            />
          </Box>
        </Tooltip>

        <WrapperText
          text={description}
          variant="body2"
          color="text.secondary"
        />
      </Box>
    </Box>
  </CardFlexible>
);
