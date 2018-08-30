// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Faster renders in prod mode
enableProdMode();

// Express server
const app = express();

const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;
const DIST_FOLDER = join(process.cwd(), 'dist/apps/dallastjames');

// Our index.html we'll use as our template
const template = readFileSync(
    join(DIST_FOLDER, 'browser', 'index.html')
).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const blankVar = '';
const {
    AppServerModuleNgFactory,
    LAZY_MODULE_MAP
}: any = require('./dist/apps/dallastjames/server/' + blankVar + 'main');

const {
    provideModuleMap
}: any = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        // Our index.html
        document: template,
        url: options.req.url,
        // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
        extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
    }).then(html => {
        callback(null, html);
    });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});
