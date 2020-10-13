import { extendTheme } from '@chakra-ui/core';
import { mode, Styles } from '@chakra-ui/theme-tools';

import { prismTheme } from './prism';

const theme: Styles = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: { primary: 'teal.600' },
  fonts: {
    heading: `'Archivo Narrow', sans-serif`,
    body: `'Barlow', sans-serif`,
    mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
  },
  fontWeights: {
    bold: 700,
    heading: 500,
  },
  landingPage: {
    section: {
      default: {
        backgroundColor: 'background',
        minHeight: '0',
      },
      primary: {
        variant: 'landingPage.section.default',
        backgroundColor: 'grayLighter',
        position: 'relative',
        minHeight: '300px',
        marginBottom: '140px',
        '&:after': {
          content: '""',
          position: 'absolute',
          backgroundColor: 'grayLighter',
          left: 0,
          bottom: '-70px',
          zIndex: -1,
          width: '100%',
          height: '230px',
          boxShadow: (t) =>
            `0 0 0 4px ${t.colors.grayLighter}, 0 0 0 8px rgba(0, 151, 101, 0.6),0 0 0 12px white, 0 0 0 16px rgba(0, 190, 127, 0.7),0 0 0 20px rgba(255,255,255,0.9), 0 0 0 24px rgba(0, 151, 101, 0.4), 0 0 0 26px rgba(0, 76, 190, 0.3), 28px 0 20px 12px rgba(0,0,0,0.3)`,
          transform: 'rotate(3deg) skew(3deg)',
        },
      },
    },
  },
  text: {
    heading: {
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'calc(4px + 2ex)',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.800')(props),
        transition: 'background-color 0.2s',
        lineHeight: 'calc(8px + 2ex)',
      },

      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      '#__next': {
        minHeight: '100vh',
      },
      hr: {
        borderColor: mode('gray.700', 'whiteAlpha.900')(props),
      },
      pre: {
        overflowX: 'auto',
      },
      ...prismTheme(props),
    }),
  },
});
export default theme;
