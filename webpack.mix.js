const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// let env = process.env.MIX_ENV;
// if (env == "LOCAL")
//     mix.setPublicPath("public/");
// if (env == "PRODUCTION")
//     mix.setPublicPath("../domains/")
// mix.setResourceRoot(process.env.MIX_RESOURCE_ROOT);
// mix.setPublicPath(process.env.MIX_PUBLIC_PATH);
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ]);
