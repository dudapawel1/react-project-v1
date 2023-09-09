const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	optimization: {
		minimizer: [
			new CssMinimizerWebpackPlugin({}),
		],
	},
	module: {
		rules: [
			{
				test: /\.module\.s(a|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules : {
								localIdentName: '[local]',
							}
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			},
			{
				test: /\.(s(a|c)ss|css)$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash:6].css',
			chunkFilename: 'style.[contenthash:6].css',
			publicPath: './'
		}),
	],
};
