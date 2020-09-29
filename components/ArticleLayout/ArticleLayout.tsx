/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

export const ArticleLayout: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props} />
);
export default ArticleLayout;