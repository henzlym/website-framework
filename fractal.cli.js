const fs = require('fs-extra');

const componentsPath = `${__dirname}/src/site/components`;
const paths = {
	components: `${__dirname}/src/site/components`,
	content: `${__dirname}/src/site/content`,
	forms: `${__dirname}/src/site/forms`,
	pages: `${__dirname}/src/site/pages`,
	partial: `${__dirname}/src/site/partial`,
	site: `${__dirname}/src/site`
};

const configSample = `module.exports = {
	label: "COMPONENT_NAME",
	context: {
		data: {
			prop: ""
		}
	}
};`;
const twigSample = `<div class="COMPONENT_NAME"></div>`;
const sassSample = `.COMPONENT_NAME {}`;

function copyFile(sourcePath, destinationPath) {
	// Read the content of the source file
	console.log(`Testing copyFile.`);
	fs.readFile(sourcePath, (err, data) => {
		console.log(`Error copying directory ${sourcePath}: ${err.message}`);
		if (err) {
			console.log(`Error copying directory ${sourcePath}: ${err.message}`);
		}
		console.log(`Testing copyFile.writeFile fn`);
		// Write the content to the destination file
		fs.writeFile(destinationPath, data, (err) => {
			if (err) {
				return console.error(
					`Error copying directory ${sourcePath} to ${destinationPath}: ${err.message}`
				);
			}
		});

		console.log(`Directory ${sourcePath} copied to ${sourcePath} successfully.`);
	});
}

function capitalizeFLetter(string) {
	if (!string) {
		return string;
	}
	return string[0].toUpperCase() + string.slice(1);
}

function createElement(args, done) {
	const app = this.fractal;
	const elementSlug = args.name.trim();
	const elementName = capitalizeFLetter(elementSlug);
	const elementType = args.type ? args.type : 'components';
	const elementDirectory = `${__dirname}/src/site/${elementType}`;

	const directory = `${elementDirectory}/${elementSlug}`;
	const configFileName = directory + '/' + args.name + '.config.js';
	const sassFileName = directory + '/' + args.name + '.scss';
	const twigFileName = directory + '/' + args.name + '.twig';

	if (!fs.existsSync(directory) && fs.existsSync(elementDirectory)) {
		fs.mkdirSync(directory);
		fs.writeFileSync(
			configFileName,
			configSample.replace('COMPONENT_NAME', elementName),
			(err) => {
				if (err) throw err;
			}
		);
		fs.writeFileSync(sassFileName, sassSample.replace('COMPONENT_NAME', elementSlug), (err) => {
			if (err) throw err;
		});
		fs.writeFileSync(twigFileName, twigSample.replace('COMPONENT_NAME', elementSlug), (err) => {
			if (err) throw err;
		});
	} else {
		console.warn('\x1b[31m', 'Component directory already exists', '\x1b[0m');
	}

	done();
}

function createElementVariation(args, done) {
	const fractal = this.fractal;
	const component = args.component.trim() || args.component;
	const variation = args.variation.trim() || args.variation;
	const Component = getComponent(component, fractal);
	let destination =
		component && variation
			? `${paths.site}/${Component.path}/${component}--${variation}.twig`
			: false;
	let source = component ? `${paths.site}/${Component.path}/${component}.twig` : null;

	if (variation == null || Component == false) {
		done();
	}

	copyFile(source, destination);

	done();
}

function getComponent(name, fractal) {
	const collection = fractal.components ? fractal.components.flatten() : [];
	let component = false;

	collection.forEach(function (item) {
		if (item.handle == 'components-card') {
			component = item;
		}
	});

	return component;
}

const fractalCLIConfig = {
	commands: [
		{
			name: 'list-components',
			config: {
				description: 'Lists components in the project'
			},
			function: function (args, done) {
				const app = this.fractal;
				for (let item of app.components.flatten()) {
					this.log(`${item.handle} - ${item.status.label}`);
				}
				done();
			}
		},
		{
			name: 'create-component <name> [type]',
			config: {
				description: 'Create a new component in the project'
			},
			function: createElement
		}
		// {
		// 	name: 'create-component-variation <component> <variation>',
		// 	config: {
		// 		description: 'Create a new component in the project'
		// 	},
		// 	function: createElementVariation
		// }
	]
};

module.exports = fractalCLIConfig;
