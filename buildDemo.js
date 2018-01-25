const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, (err) => {
    if (err) {
        console.log('WEBPACK ERROR', err);
    }
});