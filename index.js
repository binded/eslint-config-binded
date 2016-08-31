module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    'consistent-return': 0,
    'no-param-reassign': [2, { props: false }],
    semi: [2, 'never'],
    camelcase: 0,
    'no-underscore-dangle': 0,
  },
}
