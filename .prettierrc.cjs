module.exports = {
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
	tabWidth: 2,
	trailingComma: 'all',
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	semi: true,
	importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
