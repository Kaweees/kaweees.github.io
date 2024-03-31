const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'9/16': '56.25%'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem'
			},
			fontFamily: {
				title: [
					'Lucida Console',
					'Monaco',
					'monospace',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				body: ['Mono  Lisa', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: colors.green,
				gray: colors.neutral,
				bg: {
					light: '#fbf1c7',
					dark: '#282828'
				},
				bg0: {
					light: '#fbf1c7',
					dark: '#282828'
				},
				bg0_h: {
					light: '#f9f5d7',
					dark: '#1d2021'
				},
				bg0_s: {
					light: '#f2e5bc',
					dark: '#32302f'
				},
				bg1: {
					light: '#ebdbb2',
					dark: '#3c3836'
				},
				bg2: {
					light: '#d5c4a1',
					dark: '#504945'
				},
				bg3: {
					light: '#bdae93',
					dark: '#665c54'
				},
				bg4: {
					light: '#a89984',
					dark: '#7c6f64'
				},
				fg: {
					light: '#3c3836',
					dark: '#ebdbb2'
				},
				fg0: {
					light: '#282828',
					dark: '#fbf1c7'
				},
				fg1: {
					light: '#3c3836',
					dark: '#ebdbb2'
				},
				fg2: {
					light: '#504945',
					dark: '#d5c4a1'
				},
				fg3: {
					light: '#665c54',
					dark: '#bdae93'
				},
				fg4: {
					light: '#7c6f64',
					dark: '#a89984'
				},
				gray1: {
					light: '#7c6f64',
					dark: '#a89984'
				},
				gray2: {
					light: '#928374',
					dark: '#928374'
				},
				red1: {
					light: '#cc241d',
					dark: '#cc241d'
				},
				red2: {
					light: '#9d0006',
					dark: '#fb4934'
				},
				green1: {
					light: '#98971a',
					dark: '#98971a'
				},
				green2: {
					light: '#797403',
					dark: '#b8bb26'
				},
				yellow1: {
					light: '#d79921',
					dark: '#d79921'
				},
				yellow2: {
					light: '#b57614',
					dark: '#fabd2f'
				},
				blue1: {
					light: '#458588',
					dark: '#458588'
				},
				blue2: {
					light: '#076678',
					dark: '#83a598'
				},
				purple1: {
					light: '#b16286',
					dark: '#b16286'
				},
				purple2: {
					light: '#8f3f71',
					dark: '#d3869b'
				},
				aqua1: {
					light: '#689d6a',
					dark: '#689d6a'
				},
				aqua2: {
					light: '#427b58',
					dark: '#8ec07c'
				},
				orange1: {
					light: '#d65d0e',
					dark: '#d65d0e'
				},
				orange2: {
					light: '#af3a03',
					dark: '#fe8019'
				},
				title_primary: {
					light: '#3c3836',
					dark: '#ffffff'
				},
				title_secondary: {
					light: '#857a52',
					dark: '#D8C787'
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.600')} !important`
							},
							code: { color: theme('colors.primary.400') }
						},
						h1: {
							fontFamily: 'Fira Code',
							fontWeight: '800',
							color: theme('colors.green.900')
						},
						h2: {
							fontFamily: 'Fira Code',
							fontWeight: '800',
							color: theme('colors.gray.900')
						},
						h3: {
							fontFamily: 'Fira Code',
							fontWeight: '800',
							color: theme('colors.gray.900')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900')
						},
						pre: {
							backgroundColor: theme('colors.gray.800')
						},
						code: {
							color: theme('colors.pink.500'),
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						'code::before': {
							content: 'none'
						},
						'code::after': {
							content: 'none'
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.500')
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.500')
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200')
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.400')} !important`
							},
							code: { color: theme('colors.primary.400') }
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100')
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100')
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.100')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.100')
						},
						pre: {
							backgroundColor: theme('colors.gray.800')
						},
						code: {
							backgroundColor: theme('colors.gray.800')
						},
						details: {
							backgroundColor: theme('colors.gray.800')
						},
						hr: { borderColor: theme('colors.gray.700') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.400')
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.400')
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							th: {
								color: theme('colors.gray.100')
							}
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700')
							}
						},
						blockquote: {
							color: theme('colors.gray.100'),
							borderLeftColor: theme('colors.gray.700')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
