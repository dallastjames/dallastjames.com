const path = require('path');
const webpack = require('webpack');
const join = require('path').join;

const DIST_FOLDER = join(process.cwd(), 'dist/apps/dallastjames');
const ENTRY_FOLDER = join(process.cwd(), 'apps/dallastjames');

module.exports = {
    entry: { server: join(ENTRY_FOLDER, 'server.ts') },
    resolve: { extensions: ['.js', '.ts'] },
    target: 'node',
    mode: 'none',
    // this makes sure we include node_modules and other 3rd party libraries
    externals: [/node_modules/],
    output: {
        path: DIST_FOLDER,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
        // for 'WARNING Critical dependency: the request of a dependency is an expression'
        new webpack.ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
        ),
        new webpack.ContextReplacementPlugin(
            /\.\/dist\/apps\/dallastjames\/server/,
            path.join(process.cwd(), 'dist/apps/dallastjames/server/'),
            {}
        )
    ]
};
