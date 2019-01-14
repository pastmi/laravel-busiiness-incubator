<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>BusinessIncubator</title>
        <link href="{{ mix('css/index.css') }}" rel="stylesheet">
        <link href="{{ mix('css/vendor.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    </head>
    <body class="app">
    <div id="vue-content">

    </div>
    <script>
        window.SERVER_URL = '@@gulpServerUrl';
        window.VERSION = '@@gulpVersion';
    </script>
    <script rel="preload" src="{{mix('js/app.js')}}"></script>
    </body>
</html>
