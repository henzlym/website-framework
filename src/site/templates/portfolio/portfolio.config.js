const config = require(`@root/site.config.json`);
const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	label: 'Portfolio',
	status: 'prototype',
	context: {
		page: {
			theme: 'green',
			classes: 'portfolio--magazine',
			mode: 'dark',
			header: {
				classes: 'py-sm-3 py-md-5',
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
						nav_classes: 'text-uppercase',
						title: ''
					},
					navbar_collapse_classes: 'justify-content-end'
				}
			}
		},
		author: {
			name: 'John Doe',
			prefix: 'By',
			url: '#'
		},
		date: {
			published: 'January 1, 2021',
			updated: 'January 1, 2021'
		},
		featured_image: {
			id: null,
			alt_text: 'image alt_text',
			caption:
				'Sem viverra aliquet eget sit amet tellus. Risus at ultrices mi tempus imperdiet nulla malesuada. Eu ultrices vitae auctor eu augue ut lectus arcu.',
			src: 'placeholder',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		social_share: true,
		comments: true,
		categories: ['Entertainment', 'Music', 'Hip-hop'],
		primary_cateogry: 'Hip-hop',
		tags: ['BET Awards', 'Grammys', 'VMAs', 'Hip-hop'],
		ads: true,
		lead: 'Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Vestibulum sed arcu non odio euismod lacinia at quis risus. Nunc mi ipsum faucibus vitae aliquet nec.',
		picture: {
			id: null,
			alt: '',
			classes: 'w-100 aspect-ratio-widescreen',
			src: 'placeholder',
			loading: 'lazy',
			size: 'large'
		},
		articles_list: {
			classes: 'row-gap-5',
			title: '',
			read_more: {
				title: 'View website'
			}
		},
		related_articles: {
			component_name: 'component-card--image',
			classes: 'd-flex flex-column row-gap-3',
			title: 'Related Articles'
		},
		summary: {
			content:
				'<p>I specialize in developing high-performance WordPress solutions <br>by building scalable themes and plugins.</p>'
		},
		wysiwyg_two: {
			content:
				'<h2>What Exactly is a Template?</h2><p>A template in web design is a pre-designed webpage—or set of HTML documents—that includes both the visual layout and the code structure. Templates are fully designed, coded, and ready to use. They typically include placeholders for text and images, which can be replaced to fit the needs of your specific project. Templates are ideal for those who want to launch a website quickly and with minimal fuss, as they provide a complete package that only requires content substitution.</p>'
		},
		wysiwyg_three: {
			content:
				'<h2>Defining a Layout in Web Design</h2><p>On the other hand, a layout is a conceptual design that dictates the arrangement of visual elements on a webpage. It’s the blueprint that shows where elements like headers, footers, content blocks, and widgets should go. Unlike templates, layouts do not come with design elements or content; they merely provide a structural guide. This allows web developers and designers to have more creative freedom and flexibility, enabling them to craft unique aesthetics and user experiences from the ground up.</p>'
		}
	},
	variants: []
};
