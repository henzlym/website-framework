module.exports = {
	label: 'Menu Item',
	status: 'prototype',
	context: {
		item: {
			name: 'About Us',
			path: 'about.html',
			children: [
				{
					name: 'Our Team',
					path: 'team.html'
				},
				{
					name: 'Our History',
					path: 'history.html'
				}
			]
		}
	}
};
