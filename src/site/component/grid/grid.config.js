const articles = require(`@root/articles.config.js`);
const users = require(`@root/users.config.js`);

module.exports = {
	title: 'Grid',
	status: 'prototype',
	context: {
		component_name: 'component-card--image',
		classes: '',
		row_classes: '3',
		items: articles,
		title: 'Grid Title',
		type: '3'
	},
	variants: [
		{
			name: 'One columns',
			context: {
				row_classes: 'row-cols-1',
				items: articles.slice(0, 3)
			}
		},
		{
			name: 'Two columns',
			context: {
				row_classes: 'row-cols-md-2',
				items: articles.slice(0, 4)
			}
		},
		{
			name: 'Three columns',
			context: {
				row_classes: 'row-cols-md-3',
				items: articles.slice(0, 3)
			}
		},
		{
			name: 'Four columns',
			context: {
				row_classes: 'row-cols-md-4',
				items: articles.slice(0, 4)
			}
		}
	]
};
