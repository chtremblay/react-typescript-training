module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {},
    'css-mqpacker': {},
    'postcss-color-function': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-extend': {},
    'postcss-pxtorem': {
      root_value: 16,
      unit_precision: 5,
      prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing'],
      replace: true,
      media_query: false
    },
    'postcss-simple-vars': {},
    'postcss-hexrgba': {},
  }
};