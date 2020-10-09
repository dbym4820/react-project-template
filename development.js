const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const pub = path.resolve(__dirname, 'public');

export default {
    mode: 'development',
    entry: {
	'index': src + '/index.jsx',
    },
    output: {
	path: dist,
	filename: 'bundle.js'
    },
    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: 'babel-loader'
	    },
	    {
		test: /\.txt$/,
		exclude: /node_modules/,
		use: 'raw-loader'
	    },
	    {
		test: /\.json$/,
		use: 'json-loader'
	    },
	    {
		test: /\.css$/,
		use: [
		    'style-loader',
		    'css-loader'
		],
	    },
	    {
		test: /\.scss$/,
		use: [
		    'style-loader',
		    'css-loader',
 		    'sass-loader'
		],
	    },
	    {
		test: /\.(png|jpe?g|gif|ico)$/,
		use: [{
		    loader: 'url-loader',
		    options: {
			limit: 20000,
			name: '[name].[ext]'
		    }
		}]
	    },
	]
    },

    resolve: {
	extensions: ['.js', '.jsx']
    },

    plugins: [
	new HtmlWebpackPlugin({
	    template: src + '/index.html',
	    filename: 'index.html'
	}),
    ],
    devServer: {
        contentBase: dist,
	historyApiFallback: true,
    }
}
