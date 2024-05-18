const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	label: 'Figure',
	status: 'prototype',
	context: {
		caption:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus obcaecati, provident dignissimos libero similique consectetur hic deleniti ipsum voluptates cupiditate, ab nulla officiis eligendi omnis iste at distinctio vel amet',
		credit: 'Mark Henry',
		classes: '',
		image_class: '',
		image: {
			alt: 'Ab nulla officiis eligendi omnis iste at distinctio vel amet',
			classes: '',
			id: null,
			loading: 'lazy',
			size: 'medium',
			sources: {
				'1024px': image_sizes['large'],
				'960px': image_sizes['medium_large'],
				'720px': image_sizes['medium'],
				'540px': image_sizes['small'],
				'360px': image_sizes['thumbnail']
			},
			src: 'placeholder'
		}
	}
};
