const path = require ('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js', // here we gonna name what will be the output(we choose the name)
        path: path.resolve(__dirname, 'dist'), // we should say the path where the output will be , and it should match with whats writte in tsconfig
    }
};