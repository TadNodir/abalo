<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token">
{{--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">--}}
    <title>New Article</title>
    <script src="https://unpkg.com/vue@next"></script>
    @vite(['resources/css/app.scss', 'resources/js/app.js', 'resources/css/newSiteFooter.scss', 'resources/css/newArticle.scss'])
    <!-- Scripts -->
</head>
<body>
<script id="csrf-token" data-token="{{ csrf_token() }}"></script>
<div id="bigApp">
    <new-article></new-article>
</div>
<script type="module">
</script>
</body>
</html>
<script>

</script>
