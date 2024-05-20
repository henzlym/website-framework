const config = require(`@root/site.config.json`);
const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	label: 'Archive',
	status: 'prototype',
	context: {
		page: {
			classes: 'archive--magazine',
			title: 'Blog'
		},
		articles_list: {
			title: ''
		},
		header: {
			navbar: {
				classes: 'container',
				site_brand: {
					img: false,
					url: '#',
					title: 'Henzly Meghie'
				},
				navigation: {
					classes: 'ms-auto',
					id: 'site-navigation',
					items: config.menus.primary,
					item_class: '',
					js_class: '',
					link_class: '',
					nav_classes: '',
					title: ''
				},
				navbar_collapse_classes: 'justify-content-end'
			}
		}
	},
	variants: [
		{
			name: 'grid',
			context: {
				page: {
					classes: 'code--magazine',
					title: 'Blog'
				},
				articles_list: {
					title: '',
					row_classes: 'row-cols-md-2 row-gap-3',
					component_name: 'component-card--image-description'
				},
				header: {
					navbar: {
						classes: 'container py-5',
						site_brand: {
							img: false,
							url: '#',
							title: 'Henzly Meghie'
						},
						navigation: {
							classes: 'ms-auto',
							id: 'site-navigation',
							items: config.menus.primary,
							item_class: '',
							js_class: '',
							link_class: '',
							nav_classes: '',
							title: ''
						},
						navbar_collapse_classes: 'justify-content-end'
					}
				}
			}
		},
		{
			name: 'magazine',
			context: {
				page: {
					classes: 'code--magazine',
					title: 'Blog'
				},
				articles_list: {
					title: '',
					row_classes: 'row-cols-md-2 row-gap-3',
					component_name: 'component-card--image-description'
				},
				header: {
					navbar: {
						classes: 'container py-5',
						site_brand: {
							img: false,
							url: '#',
							title: 'Henzly Meghie'
						},
						navigation: {
							classes: 'ms-auto',
							id: 'site-navigation',
							items: config.menus.primary,
							item_class: '',
							js_class: '',
							link_class: '',
							nav_classes: '',
							title: ''
						},
						navbar_collapse_classes: 'justify-content-end'
					}
				}
			}
		}
	]
};
