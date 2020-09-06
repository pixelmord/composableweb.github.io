import { defaultTheme } from 'prestyled';
import { merge, Theme } from 'theme-ui';
export default merge(defaultTheme, {
  colors: { ...defaultTheme.colors, primary: 'hsl(79.7, 60.8%, 50%)' },
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Work Sans', sans-serif`,
    mono: `Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,
  },
  fontWeights: {
    bold: 600,
    heading: 600,
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
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: 1.2,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      lineHeight: 1.6,
    },
  },
} as Theme);
