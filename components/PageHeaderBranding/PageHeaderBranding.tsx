/** @jsx jsx */
import { jsx, Box, BoxProps, Text } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';
import { Heading } from '~components/prestyled';
import NextLink from '~components/NextLink';

export const PageHeaderBranding: React.FC<BoxProps> = (props: PropsWithoutRef<PropsWithChildren<BoxProps>>) => (
  <Box {...props}>
    <Heading>
      <NextLink href="/">{config.siteTitle}</NextLink>
    </Heading>
  </Box>
);
export default PageHeaderBranding;
