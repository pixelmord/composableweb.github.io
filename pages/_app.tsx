import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles';
import PageLayout from '~components/PageLayout';
const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </ThemeProvider>
);

export default App;
