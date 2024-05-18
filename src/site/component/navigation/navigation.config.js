const config = require(`@root/site.config.json`);

module.exports = {
	title: 'Navigation',
	status: 'prototype',
	context: {
		classes: '',
		id: 'site-navigation',
		items: config.menus.primary,
		item_class: '',
		js_class: '',
		link_class: '',
		nav_classes: '',
		title: 'Navigation Title'
	},
	variants: [
		{
			name: 'vertical',
			context: {
				nav_classes: 'd-flex flex-column column-gap-2 justify-content-center'
			}
		}
	]
};
