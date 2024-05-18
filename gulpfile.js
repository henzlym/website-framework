'use strict';

require('module-alias/register');

/**
 * Gulp Dependecies
 */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const webpackCompiler = require('webpack');
const webpackConfig = require('./webpack.config');
const fractal = require('./fractal.config');
const fractalLogger = fractal.cli.console;
const tap = require('gulp-tap');
const fs = require('fs');

// const bootstrapIcons = require('bootstrap-icons');

const isProduction = false;
const srcPath = `${__dirname}/src`;
const buildPath = `${srcPath}/build`;
const publicPath = `${srcPath}/public`;

const paths = {
	css: {
		src: `${srcPath}/scss/site.scss`,
		public: `${srcPath}/public/css/site.css`,
		dest: `${publicPath}/css`,
		destBuild: `${buildPath}/components`
	},
	icons: {
		src: `${srcPath}/icons/flaticon.svg`,
		dest: `${publicPath}/icons`,
		destBuild: `${buildPath}/components`
	}
};
function buildIcons(params) {
	return gulp
		.src(['./node_modules/bootstrap-icons/bootstrap-icons.svg'])
		.pipe(gulp.dest(paths.icons.dest))
		.pipe(rename('icons.svg'))
		.pipe(gulp.dest(paths.icons.dest));
}
function buildStyles() {
	return gulp
		.src(paths.css.src)
		.pipe(sassGlob())
		.pipe(
			sass({
				outputStyle: isProduction ? 'compressed' : 'expanded',
				includePaths: ['node_modules']
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest(paths.css.dest));
}

function buildScripts() {
	return gulp
		.src([`${srcPath}/js/*.js`])
		.pipe(named())
		.pipe(webpack(webpackConfig, webpackCompiler))
		.pipe(gulp.dest(`${publicPath}/js`));
}

function buildVendorScripts() {
	return gulp
		.src([`./node_modules/bootstrap/dist/js/bootstrap.bundle.js`], { sourcemaps: true })
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(`${publicPath}/js`));
}

function cleanFiles() {
	return gulp
		.src([`${publicPath}/css/**/*`, `${publicPath}/js/**/*`], {
			read: false
		})
		.pipe(clean());
}

function watchFiles() {
	gulp.watch(
		[`${srcPath}/site/**/*.scss`, `${srcPath}/scss/**/*.scss`],
		gulp.parallel(buildIcons, buildStyles)
	);
	gulp.watch([`${srcPath}/js/**/*.js`], gulp.parallel(buildVendorScripts, buildScripts));
}

function buildComponentStyles() {
	var files = [
		'/Users/henzlymeghie/Development/website-framework/framework/src/build/components/preview/*.html'
	];

	// Go through each html build file
	// Create a new css file using the site.css contents and renaming it the same as the current html build file
	// Extract the unused css from that new css file
	// Export the purged css file into the build folder
	return gulp
		.src(files)
		.pipe(
			tap(async function (file) {
				const siteCss = fs.readFileSync(paths.css.public, 'utf8');
				file.contents = Buffer.from(siteCss);
			})
		)
		.pipe(
			rename({
				extname: '.css'
			})
		)
		.pipe(gulp.dest(`${srcPath}/public/components`))
		.on('error', (err) => console.error('Error during purgecss task:', err));
}

function purgeComponentStyles() {
	var files = fs.readdirSync(`${srcPath}/public/components`);
	return Promise.all(
		files.map((task) => {
			return new Promise((resolve, reject) => {
				const filename = task.replace('.css', '');
				return gulp
					.src(`${srcPath}/public/components/${filename}.css`)
					.pipe(
						purgecss({
							content: [
								`/Users/henzlymeghie/Development/website-framework/framework/src/build/components/preview/${filename}.html`
							],
							variables: true
						})
					)
					.pipe(gulp.dest(`${srcPath}/dist/components`))
					.on('end', () => resolve());
			});
		})
	);
}

// fractal.load().then(() => {
// 	// render a component with a custom set of context data
// });

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
function fractalStart() {
	const server = fractal.web.server({
		open: true,
		sync: true,
		port: 3000
	});

	server.on('error', (err) => fractalLogger.error(err.message));

	server._app.on('source:updated', () => {
		let time = new Date().toLocaleTimeString('en-US');

		fractalLogger.success(`[${time}] Source changed - Reloading Fractal`);
	});

	return server.start().then(() => {
		fractalLogger.success(`Fractal local server is now running at ${server.url}`);
		fractalLogger.success(
			`Fractal exposed server is now running at ${server.urls.sync.external}`
		);
	});
}

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
function fractalBuild() {
	const builder = fractal.web.builder();

	builder.on('progress', (completed, total) =>
		fractalLogger.update(`Exported ${completed} of ${total} items`, 'info')
	);

	builder.on('error', (err) => fractalLogger.error(err.message));

	return builder.start().then(() => {
		fractalLogger.success('Fractal build completed!');
	});
}

const buildFiles = gulp.series(
	cleanFiles,
	gulp.parallel(buildIcons, buildStyles, buildScripts, buildVendorScripts)
);

const build = gulp.series(buildFiles, fractalBuild);
const development = gulp.series(buildFiles, fractalStart, watchFiles);

exports.build = build;
exports.default = development;
exports.components = gulp.series(buildComponentStyles, purgeComponentStyles);
