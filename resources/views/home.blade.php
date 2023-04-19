<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title>Homepage</title>
    <style>
        .dropdown-content {
            display: none;
            position: absolute;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }
    </style>
    <!-- Scripts -->
    @vite(['public/js/navMenu.js', 'public/js/cookiecheck.js'])
</head>
<body>
</body>
</html>
