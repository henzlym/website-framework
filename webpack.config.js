const path = require('path');
const env = process.env.NODE_ENV || 'development';

module.exports = {
	mode: env,
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('autoprefixer')]
							}
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'@root': path.resolve(__dirname),
			'@src': path.resolve(__dirname, './src'),
			'@js': path.resolve(__dirname, './src/js'),
			'@api': path.resolve(__dirname, './api-examples')
		},
		extensions: ['', '.js', '.jsx', '.json']
	}
};
