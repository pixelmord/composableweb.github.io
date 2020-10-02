/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import TinaEditLink from '~components/TinaEditLink';

export const ArticleLayout: React.FC<BoxProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...rest} mx={['auto']} w={['90%', '90%', '80%', '100%']} maxWidth="70em" px="10">
    <TinaEditLink />
    {children}
  </Box>
);
export default ArticleLayout;
