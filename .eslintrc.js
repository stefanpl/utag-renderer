module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-plusplus': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'src/tests/**', 
        'webpack.config.js',
      ],
      optionalDependencies: false,
    }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, variables: true, classes: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
	  'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
}
