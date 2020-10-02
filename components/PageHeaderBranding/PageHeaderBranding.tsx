/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Avatar, Stack, StackProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';
import NextLink from '~components/NextLink';
import Heading from '~components/Heading';

export const PageHeaderBranding: React.FC<StackProps> = (props: PropsWithoutRef<PropsWithChildren<StackProps>>) => (
  <Stack
    {...props}
    flexDirection={['row', 'row', 'row', 'column']}
    spacing={[0, 0, 0, 4]}
    alignItems={['center']}
    h={'60px'}
  >
    <Avatar
      size="2xl"
      w={['48px', '48px', '48px', '160px']}
      h={['48px', '48px', '48px', '160px']}
      name="Andreas Adam"
      src="/static/favicons/android-chrome-192x192.png"
      mr={[2, 4, 4, 0]}
    />
    <Heading my={0} size="lg">
      <NextLink href="/">{config.common.title}</NextLink>
    </Heading>
    <Heading as="h3" my={0} fontSize={{ base: 'md', lg: 'xl' }} display={['none', 'none', 'none', 'block']}>
      {config.common.tagline}
    </Heading>
  </Stack>
);
export default PageHeaderBranding;
