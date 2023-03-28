<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Articles</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
<div id="app">

    <main class="py-4">
        <form method="get" action="{{url('/articles')}}">
            <label for="search">Artikel suchen: </label>
            <input type="text" name="searchArticle" id="search">
            <input type="submit" name="submit" value="Suchen">
            @if(isset($_GET['submit']))
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>picture</th>
                    </tr>
                    @foreach($article as $value => $item)
                        <tr>
                            <td>{{$item->id}}</td>
                            <td>{{$item->ab_name}}</td>
                            <td>{{$item->ab_price}}</td>
                            <td>{{$item->ab_description}}</td>
                            <td><img src="/resources/articelimages/{{$item->id}}.jpg" width="100px" height="100px" alt="{{$item->ab_name}}"></td>
                        </tr>
                    @endforeach
                </table>
            @endif
        </form>
    </main>
</div>
</body>
</html>
