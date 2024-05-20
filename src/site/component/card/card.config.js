const themeConfig = require(`@root/theme.config.js`);

module.exports = {
	title: 'Card',
	status: 'prototype',
	context: {
		theme: themeConfig.card,
		classes: '',
		item: {
			image: true,
			title: 'Ornare turpis adipiscing pretium eget consectetur',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est sed ex pretium fringilla. Vivamus ac turpis quis eros consectetur ornare.',
			categories: 'Entertainment',
			author: {
				name: 'Vivamus Amet',
				link: '#'
			},
			link: {
				icon: 'chevron-right',
				icon_height: 16,
				icon_width: 16,
				title: 'Read More',
				url: '#'
			},
			meta: {
				author: {
					name: 'John Doe',
					prefix: 'By',
					url: '#',
					avatar: false
				},
				date: {
					published: '1st January, 2021',
					updated: ''
				}
			}
		},
		modifier: ''
	},
	display: {},
	variants: [
		{
			name: 'image',
			context: {
				item: {
					image: {
						classes: 'aspect-ratio-widescreen'
					}
				}
			}
		}
	]
};
