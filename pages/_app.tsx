import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles';
import PageLayout from '~components/PageLayout';
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  </>
);

export default App;
