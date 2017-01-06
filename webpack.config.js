var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');



module.exports = {
	entry:__dirname + '/src/app.js',

	output:{
		path: __dirname + '/prd/',
		filename:'bundle.js'
	},

	devtool:'source-map',

	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},

			{
				test:/\.js$/,
				loader:'babel-loader?presets[]=es2015'
			},

			{
				test:/\.scss$/,
				// loader:'style!css!sass-loader'
				loader:ET.extract('style-loader','css!sass')
			},

			{
				test:/\.string$/,
				loader:'string'
			},

			{
				test:/\.vue$/,
				loader:'vue'
			}

		]
	},
	//解析vue中的es6代码
	vue:{
		loaders:{
			js:'babel'
		}
	},

	resolve:{
		alias:{
			'vue$':'vue/dist/vue.js'
		}
	},

	devServer:{
		contentBase:__dirname + '/prd',
		port:80,
		host:'localhost',
		inline:true,
		proxy:{
			'/api':{
				target:'http://localhost:3000',
				pathRewrite:{
					'^/api':''
				}

			}
		}
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')

	]
}
