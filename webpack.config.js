const path = require('path');
const slsw = require('serverless-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternal = require('webpack-node-externals');

const isLocal = slsw.lib.webpack.isLocal;

const extensions = ['.js', '.jsx', '.json', '.ts', '.tsx'];

module.exports = {
	mode: isLocal ? 'development' : 'production',
	entry: slsw.lib.entries,
	target: 'node',
	context: __dirname,
	externals: isLocal ? [nodeExternal()] : ['knex', 'sharp'],
	devtool: isLocal ? 'source-map' : false,
	node: {
		__dirname: false
	},
	resolve: {
		symlinks: false,
		extensions,
		modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig-build.json', extensions })]
	},
	performance: {
		hints: false
	},
	optimization: isLocal
		? { minimize: false }
		: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							output: {
								comments: false
							}
						}
					})
				]
		  },
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'cache-loader',
						options: {
							cacheDirectory: path.resolve('.webpackCache')
						}
					},
					'babel-loader'
				]
			}
		]
	},
	plugins: [new ForkTsCheckerWebpackPlugin()]
};
