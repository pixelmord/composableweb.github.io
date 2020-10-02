/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex, FlexProps } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';

import PageHeader from '~components/PageHeader';
import MainNavigation from '~components/MainNavigation';
import PageFooter from '~components/PageFooter';
import PageHeaderBranding from '~components/PageHeaderBranding';
import FooterNavigation from '~components/FooterNavigation';

export const PageLayout: React.FC<FlexProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<FlexProps>>) => (
  <Flex {...rest} flexDirection={{ base: 'column', lg: 'row' }} minHeight="100vh">
    <PageHeader
      justifyContent={['flex-start', 'flex-start', 'flex-start', 'space-between']}
      w={{ base: '100%', lg: '350px', xl: '450px' }}
    >
      <PageHeaderBranding mx="auto" w={['90%', '90%', '80%']} />
      <MainNavigation mx="auto" w={['90%', '90%', '80%']} />
    </PageHeader>
    <Flex as="main" backgroundColor="gray.50" flexGrow={1} direction="column" justifyContent="space-between">
      {children}
      <PageFooter flexShrink={1}>
        <FooterNavigation />
      </PageFooter>
    </Flex>
  </Flex>
);

export default PageLayout;
