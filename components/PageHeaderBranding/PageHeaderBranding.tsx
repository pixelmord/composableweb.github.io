import { Avatar, Stack, StackProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import config from '../../config';
import NextLink from '~components/NextLink';
import Heading from '~components/Heading';

export const PageHeaderBranding: React.FC<StackProps> = (props: PropsWithoutRef<PropsWithChildren<StackProps>>) => (
  <Stack
    {...props}
    flexDirection={['row', 'row', 'row', 'column']}
    textAlign={{ lg: 'center' }}
    spacing={[0, 0, 0, 4]}
    alignItems={['center']}
    mt={{ base: 0, lg: 20 }}
    h={'60px'}
  >
    <NextLink href="/">
      <Avatar
        size="2xl"
        w={['48px', '48px', '48px', '160px']}
        h={['48px', '48px', '48px', '160px']}
        name="Composable Web"
        src="/static/favicons/android-chrome-192x192.png"
        mr={[2, 4, 4, 0]}
        opacity={0.75}
        bg="transparent"
      />
    </NextLink>
    <Heading
      as="h2"
      my={{ base: 0, lg: 3 }}
      fontSize={{ base: 'xl', lg: '3xl' }}
      fontFamily="heading"
      fontWeight="heading"
    >
      <NextLink href="/">{config.common.title}</NextLink>
    </Heading>
    <Heading as="h3" my={0} fontSize={{ base: 'md', lg: 'xl' }} display={{ base: 'none', lg: 'block' }}>
      {config.common.tagline}
    </Heading>
  </Stack>
);
export default PageHeaderBranding;
