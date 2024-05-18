import Glide from '@glidejs/glide';

function glidePlugin(settings) {
	const defaultSettings = {
		type: 'carousel',
		perView: 3,
		peek: {
			before: 0,
			after: 16 * 3
		}
	};

	const config = Object.assign({}, defaultSettings, settings);
	const glide = new Glide('.glide', config);
	glide.mount();

	return glide;
}

export default glidePlugin;
