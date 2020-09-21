import React from 'react';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles';
import PageLayout from '~components/PageLayout';
import MDXComponents from '~components/MDXComponents';

const App = ({ Component, pageProps }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@500&family=Barlow:wght@400;600&display=swap" />
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <ThemeProvider theme={theme} components={MDXComponents}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  </>
);

export default App;
