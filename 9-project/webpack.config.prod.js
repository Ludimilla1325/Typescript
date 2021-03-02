const path = require ('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:'production', // in the end ell webpage tha we r building for development
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js', // here we gonna name what will be the output(we choose the name)
        path: path.resolve(__dirname, 'dist'), // we should say the path where the output will be , and it should match with whats writte in tsconfig
    }, // here we gonna say how to work with the files

    devtool: 'none', // it tells where there will be generated source maps alredy which it should extract ad bundle it,
    module : {
        rules:[
            { // this describes a test where will perform on any files it finds to find out wheter this rule here applies to that file or not
                test: /\.ts$/, // this a regular expression that tells that you want to check for files with end .ts
                use:'ts-loader', // what webpack should do with those files, every file that webpage finds, should be handle by ts-loader
                exclude: /node_modules/ // the webpacge doesnt look in the node_modules
            }
        ]
    },
    resolve: { // we tell which files extensions it adds to the import
        extensions: ['.ts', '.js'] // web will look for such files and bundle all files to import together
    },
    plugins:[ // this pluggin gonna delete everything automatically in our dist folder, so we always have the latest most recent output in this folder
        new CleanPlugin.CleanWebpackPlugin()
    ]
};