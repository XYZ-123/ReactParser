var webpack = require('webpack');

module.exports = {
    entry:
        ['webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            './src/main.jsx'],
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
    resolve:{
        extensions:["", ".webpack.js", ".web.js", ".js",".jsx"]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    }
};
