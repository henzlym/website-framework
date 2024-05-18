const imageSizes = {
	thumbnail: {
		name: 'thumbnail',
		width: 360,
		height: 252,
		crop: true
	},
	small: {
		name: 'small',
		width: 540,
		height: 378,
		crop: true
	},
	medium: {
		name: 'medium',
		width: 720,
		height: 504,
		crop: true
	},
	medium_large: {
		name: 'medium_large',
		width: 960,
		height: 671,
		crop: true
	},
	large: {
		name: 'large',
		width: 1024,
		height: 716,
		crop: true
	},
	full: {
		name: 'full',
		width: '100%',
		height: 0,
		crop: true
	},
	'post-thumbnail': {
		name: 'post-thumbnail',
		width: 960,
		height: 671,
		crop: true
	},
	avatar: {
		name: 'avatar',
		width: 96,
		height: 96,
		crop: true
	}
};

module.exports = imageSizes;
