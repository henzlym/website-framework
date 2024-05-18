const articles = require(`@root/articles.config.js`);

module.exports = {
	title: 'Carousel',
	status: 'prototype',
	context: {
		id: 'carouselExampleIndicators',
		items: articles.slice(0, 9)
	},
	display: {},
	variants: []
};
