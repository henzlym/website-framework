const config = require(`@root/site.config.json`);
const articles = require(`@root/articles.config.js`);
const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	context: {
		page: {
			theme: 'green',
			mode: 'dark',
			navbar: {
				classes: '',
				site_brand: {
					img: {
						alt: '',
						classes: 'site-logo h-site-logo mw-site-logo aspect-ratio-widescreen',
						src: 'placeholder',
						loading: 'eager',
						size: 'thumbnail',
						sources: {
							'1024px': image_sizes['large'],
							'960px': image_sizes['medium_large'],
							'720px': image_sizes['medium'],
							'540px': image_sizes['small'],
							'360px': image_sizes['thumbnail']
						}
					},
					url: '#',
					title: ''
				},
				navigation: {
					classes: 'navigation--primary py-3',
					id: 'site-navigation--primary',
					items: config.menus.primary,
					item_class: '',
					js_class: '',
					link_class: 'text-uppercase',
					nav_classes: 'container nav-underline flex-column flex-sm-row',
					title: ''
				},
				navbar_collapse_classes: 'justify-content-end'
			},
			primary_navigation: {
				classes: 'navigation--primary py-3',
				id: 'site-navigation--primary',
				items: config.menus.primary,
				item_class: '',
				js_class: '',
				link_class: 'text-uppercase',
				nav_classes: 'container nav-underline',
				title: ''
			},
			utility_navigation: {
				classes: 'navigation--utility',
				id: 'site-navigation--utility',
				items: [
					{
						label: '<span class="hm-custom-dark-link">CALL US NOW! </span>385.154.11.28.35',
						url: 'tel:385.154.11.28.35',
						icon: '',
						class: 'me-auto',
						link_class: 'text-white'
					},
					{
						label: 'Login',
						url: '#',
						icon: '',
						link_class: 'hm-custom-dark-link'
					},
					{
						label: 'Signup',
						url: '#',
						icon: '',
						link_class: 'text-white'
					}
				],
				item_class: '',
				js_class: '',
				link_class: 'py-1 px-0',
				nav_classes: 'container column-gap-3',
				title: ''
			},
			breadcrumb: {
				classes: '',
				item_classes: 'small',
				link_classes: '',
				items: [
					{
						label: 'Home',
						url: '#'
					},
					{
						label: 'Music',
						url: '#'
					},
					{
						label: 'Hip-hop',
						url: '#',
						active: true
					}
				]
			}
		},
		latest_news: {
			classes: 'rounded-0 border-0',
			item_classes: 'px-0 border-black border-bottom',
			title: 'Latest News',
			page: {
				mode: 'light'
			},
			items: articles.slice(0, 10),
			type: 'articles-headline'
		},
		grid: {
			component_name: 'component-card--image',
			classes: '',
			columns: '3',
			items: articles.slice(0, 6),
			title: 'Grid Title',
			type: '3'
		}
	},
	display: {},
	prefix: 'templates',
	root: true
};
