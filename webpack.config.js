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
				loader:'style!css!sass-loader'
			}

		]
	}
}