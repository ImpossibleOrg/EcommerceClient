const FS_LAYERS = ['app', 'processes', 'pages', 'widgets', 'features', 'entities', 'shared']

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:conarti-fsd/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'conarti-fsd', 'import', 'prettier'],
  rules: {
    'conarti-fsd/layers-slices': [
      'error',
      {
        allowTypeImports: true,
      },
    ],
    'conarti-fsd/absolute-relative': 'error',
    'conarti-fsd/public-api': 'error',
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroups: FS_LAYERS.map(
          (layer) => ({
            pattern: `**/?(*)${layer}{,/**}`,
            group: 'internal',
            position: 'after',
          }),
        ),
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ['builtin', 'type'],
        groups: ['builtin', 'external', 'internal', 'type', 'parent', 'sibling', 'index'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'never' },
    ],
    "no-param-reassign": ["error", { "props": false }],
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "react/require-default-props": "off"
  },
};
