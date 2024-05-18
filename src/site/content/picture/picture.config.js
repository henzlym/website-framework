const image_sizes = require(`@root/image-sizes.config.js`);

const picture = {
	status: 'prototype',
	context: {
		id: null,
		alt: '',
		classes: '',
		src: 'placeholder',
		loading: 'lazy',
		size: 'medium',
		sources: {
			'1024px': image_sizes['large'],
			'960px': image_sizes['medium_large'],
			'720px': image_sizes['medium'],
			'540px': image_sizes['small'],
			'360px': image_sizes['thumbnail']
		}
	}
};

module.exports = picture;
