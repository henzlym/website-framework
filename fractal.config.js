'use strict';
require('module-alias/register');

const siteConfig = require('./site.config.json');
const articles = require('./articles.config.js');
const images = require('./images.config.js');
const imageSizes = require('./image-sizes.config.js');
const projects = require('./projects.config.js');
const twigFunctions = require('./twig.functions');
const users = require('./users.config.js');
const fractalCLI = require('./fractal.cli') ?? null;
const siteData = {
	articles: articles,
	images: images,
	projects: projects,
	users: users
};
/**
 * Config Constants
 */
const srcPath = `${__dirname}/src`;
const buildPath = `${srcPath}/build`;
const docsPath = `${srcPath}/docs`;
const publicPath = `${srcPath}/public`;
const componentsPath = `${srcPath}/components`;

/*
 * Configure a Fractal instance.
 * https://github.com/frctl/fractal/blob/main/packages/fractal/config.js
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */
const fractalTheme = require('@frctl/mandelbrot')({
	highlightStyles:
		'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
	skin: 'default',
	styles: ['default']
});

fractalTheme.addLoadPath(`${srcPath}/fractal/mandelbrot`);

/*
 * Require the Twig adapter
 */
const twigAdapter = require('@frctl/twig')({
	// importContext: true,
	functions: twigFunctions
});

const fractal = require('@frctl/fractal').create({
	project: {
		title: 'Component Library',
		version: null
	},
	cli: null,
	components: {
		default: {
			collated: false,
			collator: function (markup, item) {
				const headingStyle =
					item.preview === '@preview-dark' ? 'color: #fff;' : 'color: #000;';
				const bgStyle =
					item.preview === '@preview-dark'
						? 'background-color: #000; padding: 2rem;'
						: 'background-color: #fff;  padding: 2rem 0';

				return `
					<div style="${bgStyle}">
						<h2 style="${headingStyle}">
							${item.title}
						</h2>
			
						<br>
			
						<div>
							${markup}
						</div>
					</div>
				`;
			},
			context: {
				config: siteConfig,
				menus: siteConfig.page.navigation,
				data: null,
				image_sizes: imageSizes,
				projects: siteData.projects
			},
			preview: '@preview-layout'
		},
		engine: twigAdapter,
		ext: '.twig',
		label: 'Site',
		path: `${srcPath}/site`,
		prefix: 'site'
	},
	docs: {
		path: `${srcPath}/docs`
	},
	web: {
		builder: {
			dest: `${srcPath}/build`
		},
		static: {
			path: `${srcPath}/public`
		},
		theme: fractalTheme
	}
});

const hbs = require('@frctl/handlebars')({
	helpers: {
		componentList: function () {
			let ret = '<ul>';
			const options = Array.from(arguments).pop();
			for (let component of fractal.components.flatten()) {
				ret = ret + '<li>' + options.fn(component.toJSON()) + '</li>';
			}
			return ret + '</ul>';
		},
		collectionConfig: function () {
			let ret = '<pre><code class="hljs language-sh">';
			const options = Array.from(arguments).pop();
			const components = fractal.components ? fractal.components : [];
			return ret + components + '</code></pre>';
		}
	}
});

if (Array.isArray(fractalCLI.commands) && fractalCLI.commands.length) {
	fractalCLI.commands.forEach((command) => {
		fractal.cli.command(command.name, command.function, command.config); // register the command
	});
}

fractal.docs.engine(hbs);

module.exports = fractal;
