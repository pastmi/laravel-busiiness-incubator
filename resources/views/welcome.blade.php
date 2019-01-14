<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>BusinessIncubator</title>
        {{--<link rel="stylesheet" href="{{asset('styles/index.css')}}">--}}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    </head>
    <body class="app">
    <div id="vue-content">

    </div>
    <script>
        window.SERVER_URL = '@@gulpServerUrl';
        window.VERSION = '@@gulpVersion';
    </script>
    <script rel="preload" src="{{asset('js/app.js')}}"></script>
    </body>
</html>
