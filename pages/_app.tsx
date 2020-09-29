import React from 'react';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import { Global, css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { ColorModeProvider, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import config from '../config';
import theme from '../styles';
import PageLayout from '~components/PageLayout';
import MDXComponents from '~components/MDXComponents';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@500&family=Barlow:wght@400;600&display=swap" />
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Global
            styles={css`
              #__next {
                height: 100%;
              }
            `}
          />
          <DefaultSeo {...config.meta} />
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  </>
);

export default App;
