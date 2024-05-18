const config = require(`@root/site.config.json`);

const articleMeta = {
	label: 'Article Meta',
	status: 'prototype',
	context: {
		author: {
			name: 'John Doe',
			prefix: 'By',
			url: '#'
		},
		date: {
			published: 'January 1, 2021',
			updated: 'Febuary 14, 2024'
		},
		actions: {
			icon: 'share',
			items: config.menus.socials,
			title: ''
		}
	}
};

module.exports = articleMeta;
