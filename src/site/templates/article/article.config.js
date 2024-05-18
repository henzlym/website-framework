const config = require(`@root/site.config.json`);
const image_sizes = require(`@root/image-sizes.config.js`);

module.exports = {
	label: 'Article',
	status: 'prototype',
	context: {
		page: {
			classes: '',
			mode: 'light'
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
		related_articles: {
			component_name: 'component-card--image',
			classes: 'd-flex flex-column row-gap-3',
			title: 'Related Articles'
		},
		wysiwyg_one: {
			content:
				"<h2>Unraveling the Mystery: Templates vs. Layouts in Web Design</h2><p>Welcome to our deep dive into the often-confused terms in web development—templates and layouts. Whether you're a seasoned designer or a newbie to the world of web development, understanding these foundational elements can transform your approach to website creation. Today, we’re going to explore what templates and layouts are, and how they serve different purposes in the design process.</p>"
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
	variants: [
		{
			name: 'magazine',
			context: {
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
				},
				title: 'Understanding the Difference Between Templates and Layouts in Web Design',
				excerpt:
					"Welcome to another edition on our blog where we demystify web development concepts for everyone! Today, we’re diving into a common but often confusing topic: the difference between templates and layouts. Whether you're a budding web developer or a business owner looking to spruce up your website, understanding these terms is crucial to making informed design decisions.",
				post: {
					date: '2024-05-12T09:00:00',
					slug: 'templates-vs-layouts',
					status: 'publish',
					title: 'Understanding the Difference Between Templates and Layouts in Web Design',
					content: {
						rendered:
							"\u003cp\u003eAs a freelance web developer, I often encounter confusion among clients and new designers regarding the terms \u0027template\u0027 and \u0027layout\u0027. Although they might seem similar, understanding their distinctions can significantly enhance your web design projects. Let's demystify these terms to see how they contribute to the art of website creation.\u003c/p\u003e\n\u003ch2\u003eWhat is a Template?\u003c/h2\u003e\n\u003cp\u003eA \u0027template\u0027 refers to a predefined set of HTML and CSS files that make up a complete webpage. Templates are ready to use; they include everything from the page structure to design elements like buttons and images. You can think of a template as a finished painting, where you only need to add your personal touches.\u003c/p\u003e\n\u003ch2\u003eWhat is a Layout?\u003c/h2\u003e\n\u003cp\u003eOn the other hand, a \u0027layout\u0027 is more about the arrangement of content and design elements within a webpage. It does not come with predefined style or content but provides a framework for organizing your own content. Think of a layout as the canvas and easel in painting, offering you the structure but not the final artistic elements.\u003c/p\u003e\n\u003cp\u003eBoth templates and layouts are crucial in web design, but they serve different purposes. While templates offer a quick and easy way to set up a website, layouts provide the flexibility needed for custom design solutions. By understanding these differences, you can choose the right approach for your project and ensure your website not only looks great but also functions perfectly for your needs.\u003c/p\u003e",
						protected: false,
						raw: "<p>As a freelance web developer, I often encounter confusion among clients and new designers regarding the terms 'template' and 'layout'. Although they might seem similar, understanding their distinctions can significantly enhance your web design projects. Let's demystify these terms to see how they contribute to the art of website creation.</p><h2>What is a Template?</h2><p>A 'template' refers to a predefined set of HTML and CSS files that make up a complete webpage. Templates are ready to use; they include everything from the page structure to design elements like buttons and images. You can think of a template as a finished painting, where you only need to add your personal touches.</p><h2>What is a Layout?</h2><p>On the other hand, a 'layout' is more about the arrangement of content and design elements within a webpage. It does not come with predefined style or content but provides a framework for organizing your own content. Think of a layout as the canvas and easel in painting, offering you the structure but not the final artistic elements.</p><p>Both templates and layouts are crucial in web design, but they serve different purposes. While templates offer a quick and easy way to set up a website, layouts provide the flexibility needed for custom design solutions. By understanding these differences, you can choose the right approach for your project and ensure your website not only looks great but also functions perfectly for your needs.</p>"
					},
					excerpt:
						'<p>Learn the key differences between templates and layouts in web design, and how to use each effectively in your projects.</p>',
					categories: ['Web Development', 'Design Basics'],
					primary_cateogry: 'Web Development',
					tags: ['templates', 'layouts', 'web design', 'freelance web development']
				}
			}
		}
	]
};
