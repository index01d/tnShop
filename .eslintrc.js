module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'import'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    camelcase: 'error',
    'import/default': 'error',
    'import/max-dependencies': ['error', { max: 10 }],
    'import/named': 'error',
    'import/no-unresolved': ['error', { ignore: ['~/(.*)$'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': 'warn',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { code: 120 }],
    'max-lines': ['error', 250],
    'newline-per-chained-call': 'warn',
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-negated-condition': 'warn',
    'no-tabs': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-shorthand': 'warn',
    'padded-blocks': ['warn', 'never'],
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    semi: ['error', 'always'],
    'space-before-blocks': 'warn',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn'
  },
  settings: {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src'
        ]
      }
    },
    'react': {
      'version': '16.7.0'
    }
  }
};