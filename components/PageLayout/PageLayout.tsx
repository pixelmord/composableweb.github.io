/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, FlexProps, Flex } from '@chakra-ui/core';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import Head from 'next/head';

import PageHeader from '~components/PageHeader';
import MainNavigation from '~components/MainNavigation';
import PageFooter from '~components/PageFooter';
import PageHeaderBranding from '~components/PageHeaderBranding';
import FooterNavigation from '~components/FooterNavigation';

export const PageLayout: React.FC<FlexProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<FlexProps>>) => (
  <Flex {...rest} css={{ minHeight: '100vh', flexDirection: 'column' }}>
    <Head>
      <title>ComposableWeb</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader>
      <PageHeaderBranding />
      <MainNavigation />
    </PageHeader>
    <Box as="main" css={{ flexGrow: 1 }}>
      {children}
    </Box>
    <PageFooter>
      <FooterNavigation />
    </PageFooter>
  </Flex>
);

export default PageLayout;
