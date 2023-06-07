<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>NewSite-Abalo</title>
    <script src="https://unpkg.com/vue@next"></script>

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <!-- Scripts -->
    @vite('resources/js/app.js')
</head>
<body>
<div id="bigApp" class="mt-5">
    <new-site article_length="{{json_encode($article_length)}}" articles="{{json_encode($article)}}"></new-site>
</div>
<script type="module">
</script>

</body>
</html>
