module.exports = {
  env: {
    jest: true
  },
  extends: 'get-off-my-lawn',
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never'
      }
    ],
    'react/no-set-state': 'off'
  }
};
