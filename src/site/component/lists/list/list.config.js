const articles = require(`@root/articles.config.js`);
const users = require(`@root/users.config.js`);

module.exports = {
	context: {
		classes: '',
		item_classes: '',
		title: 'Latest News',
		page: {
			mode: 'light'
		},
		items: articles,
		type: 'list',
		read_more: {
			title: 'View Project'
		}
	},
	variants: [
		{
			name: 'users',
			context: {
				items: users,
				title: '',
				type: 'user'
			}
		},
		{
			name: 'articles',
			context: {
				items: articles.slice(0, 10),
				type: 'article',
				title_classes: ''
			}
		},
		{
			name: 'articles-headline',
			context: {
				items: articles.slice(0, 10),
				type: 'articles-headline'
			}
		},
		{
			name: 'articles-image',
			context: {
				items: articles.slice(0, 4),
				type: 'articles-image'
			}
		}
	]
};
