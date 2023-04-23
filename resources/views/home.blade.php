<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <title>Homepage</title>
    <!-- Scripts -->
    @vite(['public/js/navMenu.js', 'public/js/cookiecheck.js'])
</head>
<body>
<nav id="navId"></nav>
<article id="articleId"></article>
</body>
</html>
