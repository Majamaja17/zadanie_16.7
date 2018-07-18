const path = require('path');

module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        },
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
                }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
}

