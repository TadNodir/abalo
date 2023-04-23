<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title>New Article</title>
    <!-- Scripts -->
    @vite(['public/js/newarticle.js'])
</head>
<body>
<script id="csrf-token" data-token="{{ csrf_token() }}" src="{{asset('/js/newarticle.js')}}"></script>
@error('name')
<div style="color: red">
    {{$message}}
</div>
@enderror
@error('price')
<div style="color: red">
    {{$message}}
</div>
@enderror
</body>
</html>
