import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist/', '.astro/', 'public/pagefind/'] },
  js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-cond-assign': 'warn',
      'no-constant-condition': 'warn',
      'no-unreachable': 'warn',
      'no-unused-expressions': 'warn',
      'no-constant-binary-expression': 'warn',
      'no-sequences': 'warn',
    },
  },
];
