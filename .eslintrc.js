module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/tests/**', '*.js'],
        optionalDependencies: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, variables: true, classes: true },
    ],
    curly: ['error', 'all'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 2,
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
