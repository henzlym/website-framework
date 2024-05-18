const config = require(`@root/site.config.json`);

const socialShare = {
	title: 'Social Share',
	status: 'prototype',
	context: {
		classes: '',
		nav_classes: '',
		items: config.menus.socials,
		title: 'Social Share'
	},
	variants: [
		{
			name: 'article--magazine',
			context: {
				classes: '',
				title: '',
				items: [
					{
						label: '',
						url: '#',
						icon: 'facebook'
					},
					{
						label: '',
						url: '#',
						icon: 'twitter'
					},
					{
						label: '',
						url: '#',
						icon: 'linkedin'
					},
					{
						label: '',
						url: '#',
						icon: 'pinterest'
					}
				]
			}
		},
		{
			name: 'coalition',
			context: {
				classes: 'coalition',
				title: '',
				items: [
					{
						label: '',
						url: '#',
						icon: 'facebook'
					},
					{
						label: '',
						url: '#',
						icon: 'twitter'
					},
					{
						label: '',
						url: '#',
						icon: 'linkedin'
					},
					{
						label: '',
						url: '#',
						icon: 'pinterest'
					}
				]
			}
		},
		{
			name: 'portfolio-magazine',
			context: {
				classes: 'social-share--portfolio-magazine',
				title: '',
				items: [
					{
						label: '',
						url: '#',
						icon: 'facebook'
					},
					{
						label: '',
						url: '#',
						icon: 'twitter'
					},
					{
						label: '',
						url: '#',
						icon: 'linkedin'
					},
					{
						label: '',
						url: '#',
						icon: 'pinterest'
					}
				]
			}
		}
	]
};

module.exports = socialShare;
