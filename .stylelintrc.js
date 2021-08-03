module.exports = {
  syntax: 'scss',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-htmlacademy',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
