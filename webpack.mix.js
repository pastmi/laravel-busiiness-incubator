const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/scripts/app.js', 'public/js')
   .sass('resources/assets/styles/index.scss', 'public/css');
mix.styles([
    'node_modules/keen-ui/dist/keen-ui.css'
    ], 'public/css/vendor.css');