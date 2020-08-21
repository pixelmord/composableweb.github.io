import { defaultTheme } from 'prestyled';
import { merge, Theme } from 'theme-ui';
export default merge(defaultTheme, {
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Work Sans', sans-serif`,
    mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
  },
  fontWeights: {
    bold: 800,
    heading: 800,
  },
  landingPage: {
    section: {
      primary: {
        variant: 'landingPage.section.default',
        backgroundColor: 'white',
        borderBottom: '1px solid pink',
      },
    },
  },
  text: {
    heading: {
      fontWeight: 'bold',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
} as Theme);
