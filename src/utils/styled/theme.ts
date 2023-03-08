const colors = {
  primary: '#7610dc',
  white: '#f9f9fa',
  black: '#0e0f12',
  grey: '#414855',
};

const zIndexes = {
  debug: 9999,
};

const theme = { colors, zIndexes };

export type CustomTheme = typeof theme;
export default theme;
