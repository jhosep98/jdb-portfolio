import React from 'react';
import { Box } from '@mui/material';
import { TextForLinesOutput, TextForLinesOutputModel } from '@wulperstudio/cms';

interface WrapperTextModel extends Omit<TextForLinesOutputModel, 'clines'> {
  clines?: number;
}

export const WrapperText: React.FC<WrapperTextModel> = ({ ...props }) => {
  const { color = 'text.primary', clines = 1, ...rest } = props;

  return (
    <Box>
      <TextForLinesOutput clines={clines} color={color} {...rest} />
    </Box>
  );
};
