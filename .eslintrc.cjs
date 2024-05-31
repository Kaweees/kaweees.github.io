const eslintPluginAstro = require('eslint-plugin-astro');

/** @type { import("eslint").Linter.Config } */
module.exports = {
	...eslintPluginAstro.configs['flat/recommended'],
	root: true,
	extends: ['prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-cond-assign': 'warn',
		'no-constant-condition': 'warn',
		'no-unreachable': 'warn',
		'no-unused-expressions': 'warn',
		'no-constant-binary-expression': 'warn',
		'no-sequences': 'warn',
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
