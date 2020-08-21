import React from 'react';
import { Head } from 'next/document';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles';
import PageLayout from '~components/PageLayout';
const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </ThemeProvider>
);

export default App;
