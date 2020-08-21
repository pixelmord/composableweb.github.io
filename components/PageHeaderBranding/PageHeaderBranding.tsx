/** @jsx jsx */
import { jsx, Box, BoxProps, Text } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';

export const PageHeaderBranding: React.FC<BoxProps> = (
  props: PropsWithoutRef<PropsWithChildren<BoxProps>>
) => (
  <Box {...props}>
    <Text variant="h2">{config.siteTitle}</Text>
  </Box>
);
export default PageHeaderBranding;
