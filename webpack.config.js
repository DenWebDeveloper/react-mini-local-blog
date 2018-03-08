var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {test: /\.(png|jpg|jpeg|gif|ico)$/, use: 'file-loader?name=images/[name].[ext]'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};