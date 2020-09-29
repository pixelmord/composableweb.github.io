/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxProps, Heading } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';
import NextLink from '~components/NextLink';

export const PageHeaderBranding: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props}>
    <Heading my={0} size="md" color="black">
      <NextLink href="/">{config.common.title}</NextLink>
    </Heading>
  </Box>
);
export default PageHeaderBranding;
