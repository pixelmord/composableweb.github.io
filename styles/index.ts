import { defaultTheme } from 'prestyled';
import { merge, Theme } from 'theme-ui';
export default merge(defaultTheme, {
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
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
} as Theme);
