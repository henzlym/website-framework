const _ = require('lodash');
const axios = require('axios');
const fetch = require('node-fetch'); // Use this in a Node.js environment
const articles = require(`@root/articles.config.js`);
const users = require(`@root/users.config.js`);
const url = 'http://wordpress.framework.test/wp-json/wp/v2/posts?_embed=true';

const request = require('request-promise-native'); // require the request-promise-native module

// make the request to the API, returns a Promise
const response = request({
	uri: url,
	json: true
});

module.exports = async function () {
	const response = await fetch(url);
	const data = await response.json();
	const posts = _.reduce(
		data,
		function (result, value, key) {
			result[key] = {
				title: _.get(value, 'title.rendered'),
				description: _.get(value, 'excerpt.rendered', ''),
				author: _.get(value, '_embedded.author.name', null),
				categories: _.get(value, 'wp:term.0.name', '')
			};
			// console.log(result);
			return result;
		},
		[]
	);
	const config = {
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

	const postsConfig = {
		name: 'posts',
		context: {
			items: posts,
			type: 'posts',
			title_classes: ''
		}
	};

	config.variants.push(postsConfig);

	return config;
};
