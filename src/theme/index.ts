import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  withTheme,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

const theme: ThemeInterface = {};

theme.palette = {
  primary: [
    '#004D40',
    '#00695C',
    '#00796b',
    '#00897b',
    '#009688',
    '#26a69a',
    '#4db6ac',
    '#80cbc4',
    '#b2dfdb',
    '#e0f2f1',
  ],
  secondary: [
    '#2a2a72',
    '#363b88',
    '#3e4595',
    '#464fa1',
    '#4d57ab',
    '#6670b7',
    '#808ac3',
    '#a4abd5',
    '#c7cce6',
    '#e9ebf5',
    // '#1e3340',
    // '#2f4858',
    // '#3d5b6e',
    // '#4c6f84',
    // '#597e96',
    // '#7191a7',
    // '#89a5b8',
    // '#a8bfcf',
    // '#c6dae6',
    // '#e5f0fb',
  ],
};

theme.fonts = {
  body: {
    fontFamily: 'Raleway',
    fontSize: 16.19,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: 'Raleway',
    fontSize: 14.2,
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  button: {
    fontFamily: 'Raleway',
    fontSize: 14.14,
    fontWeight: 600,
    letterSpacing: 1.25,
  },
  caption: {
    fontFamily: 'Raleway',
    fontSize: 12.12,
    fontWeight: 600,
    letterSpacing: 0.4,
  },
  h1: {
    fontFamily: 'Raleway',
    fontSize: 97.16,
    fontWeight: 500,
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: 'Raleway',
    fontSize: 60.61,
    fontWeight: 600,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: 'Raleway',
    fontSize: 48.49,
    fontWeight: 600,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'Raleway',
    fontSize: 34.41,
    fontWeight: 500,
    letterSpacing: 0.25,
  },
  h5: {
    fontFamily: 'Raleway',
    fontSize: 24.29,
    fontWeight: 500,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: 'Raleway',
    fontSize: 20.2,
    fontWeight: 600,
    letterSpacing: 0.25,
  },

  subtitle: {
    fontFamily: 'Raleway',
    fontSize: 16.16,
    fontWeight: 600,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: 'Raleway',
    fontSize: 14.17,
    fontWeight: 500,
    letterSpacing: 0.1,
  },

  overline: {
    fontFamily: 'Raleway',
    fontSize: 12.12,
    fontWeight: 600,
    letterSpacing: 2,
  },
};

theme.radius = '16';

theme.color = {
  primary: theme.palette.primary[1],
  secondary: theme.palette.secondary[1],
};

export default styled;
export { theme, css, injectGlobal, keyframes, withTheme, ThemeProvider };
