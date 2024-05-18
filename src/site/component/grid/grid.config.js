const articles = require(`@root/articles.config.js`);
const users = require(`@root/users.config.js`);

module.exports = {
	title: 'Grid',
	status: 'prototype',
	context: {
		component_name: 'component-card--image',
		classes: '',
		columns: '3',
		items: articles,
		title: 'Grid Title',
		type: '3'
	},
	variants: [
		{
			name: 'One columns',
			context: {
				columns: '1',
				items: articles.slice(0, 3)
			}
		},
		{
			name: 'Two columns',
			context: {
				columns: '2',
				items: articles.slice(0, 4)
			}
		},
		{
			name: 'Three columns',
			context: {
				columns: '3',
				items: articles.slice(0, 3)
			}
		},
		{
			name: 'Four columns',
			context: {
				columns: '4',
				items: articles.slice(0, 4)
			}
		}
	]
};
