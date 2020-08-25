/** @jsx jsx */
import { jsx, Box, BoxProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';
import { Heading } from 'prestyled';
import NextLink from '~components/NextLink';

export const PageHeaderBranding: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props}>
    <Heading my={0} variant="h3" color="hsl(330.1, 97.1%, 45%)">
      <NextLink href="/">{config.siteTitle}</NextLink>
    </Heading>
  </Box>
);
export default PageHeaderBranding;
