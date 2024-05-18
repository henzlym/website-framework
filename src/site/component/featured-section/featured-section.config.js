const articles = require(`@root/articles.config.js`);
module.exports = {
	title: 'Featured Section',
	status: 'prototype',
	context: {
		classes: '',
		items: articles,
		modifier: '',
		title: 'Group Title'
	},
	variants: [
		{
			name: 'hollywood',
			context: {}
		}
	]
};
