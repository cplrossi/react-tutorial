const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js',
    },
    module: {
	rules: [
	    {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
		    loader: "babel-loader",
		    options: {
			presets: [
			    '@babel/preset-env',
			    [
				'@babel/preset-react',
				{
				    runtime: "automatic"
				}
			    ],
			]
		    }
		}
	    },
	    {
		test: /\.css$/i,
		use: ["style-loader", "css-loader"]
	    },
	],
    },
};
