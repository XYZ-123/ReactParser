var webpack = require('webpack');

module.exports = {
    devtool:'eval-source-map',
    entry:
        [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            './src/main.jsx'
        ],
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath:'/dist'
    },
    plugins:[new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()],
    resolve:{
        extensions:["", ".webpack.js", ".web.js", ".js", ".jsx",".less"]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        },
            {
                test:/\.less$/,
                exclude: /node_modules/,
                loader:'style!css!less'
            }]
    }
};
