const fontsConfig = require('./fonts.config');

module.exports = {
	icon: function (name, width = 32, height = 32) {
		return `
			<svg class="bi" width="${width}" height="${height}" viewBox="0 0 16 16" fill="currentColor" id="icon_${name}">
				<use xlink:href="/icons/icons.svg#${name}"/>
			</svg>
		`;
	},
	getGoogleFontLink: fontsConfig.getGoogleFontLink
};
