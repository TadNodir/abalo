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
    @vite(['public/js/navMenu.js', 'public/js/cookiecheck.js', 'public/js/cart.js', 'public/js/app.js'])
</head>
<body>
<nav id="navId"></nav>
<article id="articleId"></article>
<div id="app" class="mt-5">
    <main id="mainForm" class="py-4">
        <form method="get" action="{{url('/api/newsite')}}">
            <label for="search">Artikel suchen: </label>
            <input type="text" name="searchArticle" id="search" v-on:input="showResults">
            <input type="submit" name="submit" value="Suchen">
        </form>
        <div id="tableApp">
            <div class="table-responsive">
                <table id="myTable" class="table table-hover">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>picture</th>
                    </tr>
                    @foreach($article as $value => $item)
                        <tr>
                            <td id="{{$item->id}}">{{$item->id}}</td>
                            <td>{{$item->ab_name}}</td>
                            <td>{{$item->ab_price}}</td>
                            <td>{{$item->ab_description}}</td>
                            <td>
                                @if((file_exists("articleImages/$item->id.jpg")))
                                    <img src="/articleImages/{{$item->id}}.jpg" alt="a picture" width="100"
                                         height="100">
                                @else
                                    <img src="/articleImages/{{$item->id}}.png" alt="a picture" width="100"
                                         height="100">
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
            <site-header></site-header>
            <site-body></site-body>
            <site-footer></site-footer>
        </div>
    </main>

</div>

<script type="module">
    import {SiteHeader, SiteBody, SiteFooter} from '/js/app.js';
    let vm = Vue.createApp({
        components: {
            SiteHeader, SiteBody, SiteFooter
        }
    }).mount('#tableApp');
</script>

</body>
</html>
