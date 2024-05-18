const articles = [
	{
		id: 1,
		date: 1613630599,
		modified: 1657586431,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Turpis integer aliquet massa id lobortis convallis tortor risus dapibus',
		content: 'WYSIWYG',
		description:
			'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		author: {
			id: 1,
			username: 'idayly0',
			email: 'idayly0@moonfruit.com',
			name: 'Ilario Dayly',
			first_name: 'Ilario',
			last_name: 'Dayly',
			role: 'contributor',
			phone_number: '546-555-4506',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 4,
			alt_text:
				'elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
			credit: 'Ilario Dayly',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'general-content',
		categories: 'sports',
		tags: 'fitness'
	},
	{
		id: 2,
		date: 1601907849,
		modified: 1698499874,
		slug: null,
		status: 'draft',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Mi pede malesuada in imperdiet et commodo vulputate justo in',
		content: 'WYSIWYG',
		description:
			'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
		author: {
			id: 2,
			username: 'mmarcham1',
			email: 'mmarcham1@oaic.gov.au',
			name: 'Menard Marcham',
			first_name: 'Menard',
			last_name: 'Marcham',
			role: 'contributor',
			phone_number: '403-199-8038',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 1,
			alt_text:
				'integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum',
			credit: 'Menard Marcham',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'article-2',
		categories: 'entertainment',
		tags: 'sports'
	},
	{
		id: 3,
		date: 1688002583,
		modified: 1666536628,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede',
		content: 'WYSIWYG',
		description:
			'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
		author: {
			id: 3,
			username: 'wcadney2',
			email: 'wcadney2@va.gov',
			name: 'Wanda Cadney',
			first_name: 'Wanda',
			last_name: 'Cadney',
			role: 'administrator',
			phone_number: '839-877-9681',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 1,
			alt_text:
				'quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in',
			credit: 'Wanda Cadney',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'article-1',
		categories: 'science',
		tags: 'music'
	},
	{
		id: 4,
		date: 1647749781,
		modified: 1657596906,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse',
		content: 'WYSIWYG',
		description:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
		author: {
			id: 4,
			username: 'lrawdall3',
			email: 'lrawdall3@i2i.jp',
			name: 'Lissa Rawdall',
			first_name: 'Lissa',
			last_name: 'Rawdall',
			role: 'author',
			phone_number: '793-266-0246',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 0,
			alt_text:
				'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla',
			credit: 'Lissa Rawdall',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: false,
		template: 'general-content',
		categories: 'politics',
		tags: 'music'
	},
	{
		id: 5,
		date: 1608259804,
		modified: 1674755815,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'At feugiat non pretium quis lectus suspendisse potenti in eleifend',
		content: 'WYSIWYG',
		description:
			'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
		author: {
			id: 5,
			username: 'atammadge4',
			email: 'atammadge4@dell.com',
			name: 'Alley Tammadge',
			first_name: 'Alley',
			last_name: 'Tammadge',
			role: 'author',
			phone_number: '786-433-2370',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 1,
			alt_text: 'vel accumsan tellus nisi eu orci mauris lacinia sapien quis',
			credit: 'Alley Tammadge',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'full-width',
		categories: 'politics',
		tags: 'food'
	},
	{
		id: 6,
		date: 1615312560,
		modified: 1630810033,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'A nibh in quis justo maecenas rhoncus aliquam lacus morbi quis',
		content: 'WYSIWYG',
		description:
			'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		author: {
			id: 6,
			username: 'aculshew5',
			email: 'aculshew5@zimbio.com',
			name: 'Alexis Culshew',
			first_name: 'Alexis',
			last_name: 'Culshew',
			role: 'author',
			phone_number: '700-387-9386',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 0,
			alt_text:
				'pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit',
			credit: 'Alexis Culshew',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: false,
		template: 'article-1',
		categories: 'politics',
		tags: 'music'
	},
	{
		id: 7,
		date: 1696374425,
		modified: 1610128412,
		slug: null,
		status: 'published',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Ut suscipit a feugiat et eros vestibulum ac est lacinia nisi',
		content: 'WYSIWYG',
		description:
			'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
		author: {
			id: 7,
			username: 'bhumphrey6',
			email: 'bhumphrey6@addthis.com',
			name: 'Braden Humphrey',
			first_name: 'Braden',
			last_name: 'Humphrey',
			role: 'contributor',
			phone_number: '503-987-6337',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 4,
			alt_text:
				'posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
			credit: 'Braden Humphrey',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: false,
		template: 'article-2',
		categories: 'food',
		tags: 'fashion'
	},
	{
		id: 8,
		date: 1697535956,
		modified: 1656357545,
		slug: null,
		status: 'published',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Gravida sem praesent id massa id nisl venenatis lacinia aenean sit',
		content: 'WYSIWYG',
		description:
			'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		author: {
			id: 8,
			username: 'kwindress7',
			email: 'kwindress7@ca.gov',
			name: 'Kiah Windress',
			first_name: 'Kiah',
			last_name: 'Windress',
			role: 'editor',
			phone_number: '810-441-9133',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 0,
			alt_text:
				'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa',
			credit: 'Kiah Windress',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'general-content',
		categories: 'politics',
		tags: 'fitness'
	},
	{
		id: 9,
		date: 1640728808,
		modified: 1614259993,
		slug: null,
		status: 'published',
		link: '#',
		title: 'Nulla sed accumsan felis ut at dolor quis odio consequat',
		content: 'WYSIWYG',
		description: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
		author: {
			id: 9,
			username: 'ebulch8',
			email: 'ebulch8@i2i.jp',
			name: 'Eddie Bulch',
			first_name: 'Eddie',
			last_name: 'Bulch',
			role: 'contributor',
			phone_number: '616-759-0769',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 3,
			alt_text:
				'convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim',
			credit: 'Eddie Bulch',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'featured',
		categories: 'technology',
		tags: 'fashion'
	},
	{
		id: 10,
		date: 1612362780,
		modified: 1596060619,
		slug: null,
		status: 'review',
		link: {
			icon: 'chevron-right',
			icon_height: 16,
			icon_width: 16,
			title: 'Continue Reading'
		},
		title: 'Est congue elementum in hac habitasse platea dictumst morbi vestibulum velit',
		content: 'WYSIWYG',
		description:
			'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
		author: {
			id: 10,
			username: 'wbothram9',
			email: 'wbothram9@drupal.org',
			name: 'Worth Bothram',
			first_name: 'Worth',
			last_name: 'Bothram',
			role: 'author',
			phone_number: '887-288-7598',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 0,
			alt_text:
				'integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus',
			credit: 'Worth Bothram',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'article-1',
		categories: 'business',
		tags: 'nature'
	},
	{
		id: 11,
		date: 1592664059,
		modified: 1628369450,
		slug: null,
		status: 'review',
		link: '#',
		title: 'Quam a odio in hac habitasse platea dictumst maecenas ut massa',
		content: 'WYSIWYG',
		description:
			'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
		author: {
			id: 11,
			username: 'chellicara',
			email: 'chellicara@soundcloud.com',
			name: 'Crin Hellicar',
			first_name: 'Crin',
			last_name: 'Hellicar',
			role: 'administrator',
			phone_number: '492-630-8064',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 5,
			alt_text:
				'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus',
			credit: 'Crin Hellicar',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: false,
		template: 'article-2',
		categories: 'technology',
		tags: 'music'
	},
	{
		id: 12,
		date: 1609996703,
		modified: 1609419471,
		slug: null,
		status: 'review',
		link: '#',
		title: 'Id luctus nec molestie sed justo pellentesque viverra pede ac diam',
		content: 'WYSIWYG',
		description:
			'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
		author: {
			id: 12,
			username: 'isuscensb',
			email: 'isuscensb@cloudflare.com',
			name: 'Izaak Suscens',
			first_name: 'Izaak',
			last_name: 'Suscens',
			role: 'author',
			phone_number: '585-719-5492',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 2,
			alt_text:
				'nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
			credit: 'Izaak Suscens',
			src: '#',
			loading: 'lazy',
			size: 'post-thumbnail'
		},
		comment_status: true,
		template: 'full-width',
		categories: 'travel',
		tags: 'music'
	},
	{
		id: 13,
		date: 1634099372,
		modified: 1642229699,
		slug: null,
		status: 'draft',
		link: '#',
		title: 'Vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean',
		content: 'WYSIWYG',
		description:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
		author: {
			id: 13,
			username: 'mhullotc',
			email: 'mhullotc@cisco.com',
			name: 'Madelina Hullot',
			first_name: 'Madelina',
			last_name: 'Hullot',
			role: 'administrator',
			phone_number: '902-246-3955',
			url: '#',
			x: 'twitter.com',
			facebook: 'facebook.com',
			linkedin: 'linkedin.com',
			instagram: 'instagram.com',
			youtube: 'youtube.com'
		},
		image: {
			id: 4,
			alt_text:
				'lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at',
			credit: 'Madelina Hullot',
			src: '#',
			loading: 'eager',
			size: 'post-thumbnail'
		},
		comment_status: false,
		template: 'general-content',
		categories: 'travel',
		tags: 'fitness'
	}
];

module.exports = articles;
