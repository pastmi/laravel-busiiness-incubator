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
    'vendor/keen-ui/keen-ui.css'
    ], 'public/css/vendor.css');
// mix.scripts([
//     'resources/assets/js/sweetalert.js',
//     'resources/assets/js/moment.js',
//     'resources/assets/js/bootstrap-editable.min.js',
//     'resources/assets/js/typeahead.js',
//     'resources/assets/js/bootstrap-datetimepicker.min.js',
//     'resources/assets/js/wysihtml5/summernote-bs4.js',
//     'resources/assets/js/wysihtml5/lang/summernote-fr-FR.js',
//     'resources/assets/js/dropzone/dropzone.js',
//     'resources/assets/js/jquery-ui.min.js',
//     'resources/assets/js/ion.rangeSlider.min.js',
//     'resources/assets/js/select2/js/select3.full.js',
//     'resources/assets/js/select2/js/i18n/fr.js',
//     'resources/assets/js/bootstrap-datepicker.js',
//     'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js',
//     'node_modules/jquery-autogrow-textarea/dist/jquery.autogrow.min.js',
//     'resources/assets/js/scripts.js',
//     'resources/assets/js/main.js',
// ],'public/js/vendor.js');
