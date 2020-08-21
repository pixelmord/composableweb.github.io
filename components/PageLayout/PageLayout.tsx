/** @jsx jsx */
import { jsx, Flex, FlexProps } from 'theme-ui';
import { PropsWithoutRef, PropsWithChildren } from 'react';
import Head from 'next/head';
import PageHeader from '../PageHeader';
import MainNavigation from '../MainNavigation';
import PageFooter from '../PageFooter';
import PageHeaderBranding from '~components/PageHeaderBranding';

export const PageLayout: React.FC<FlexProps> = ({
  children,
  ...rest
}: PropsWithoutRef<PropsWithChildren<FlexProps>>) => (
  <Flex {...rest} sx={{ minHeight: '100vh', flexDirection: 'column' }}>
    <Head>
      <title>ComposableWeb</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader>
      <PageHeaderBranding />
      <MainNavigation />
    </PageHeader>
    <main sx={{ flexGrow: 1 }}>{children}</main>
    <PageFooter />
  </Flex>
);

export default PageLayout;
