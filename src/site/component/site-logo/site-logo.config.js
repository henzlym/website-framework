const config = require(`@root/site.config.json`);
const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	title: 'Site Logo',
	status: 'prototype',
	context: {
		page: {
			classes: 'coalition'
		},
		img: {
			alt: '',
			classes: 'site-logo mw-site-logo aspect-ratio-widescreen',
			src: 'placeholder',
			loading: 'eager',
			size: 'thumbnail',
			sources: {
				'1024px': image_sizes['large'],
				'960px': image_sizes['medium_large'],
				'720px': image_sizes['medium'],
				'540px': image_sizes['small'],
				'360px': image_sizes['thumbnail']
			}
		},
		url: '#',
		title: ''
	},
	variants: []
};
