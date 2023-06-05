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
{{--    @vite(['public/js/navMenu.js', 'public/js/cookiecheck.js', 'public/js/cart.js'])--}}
</head>
<body>
<div id="bigApp" class="mt-5">
    <site-header @update_page="setType('home')"></site-header>
    <site-body :type="type" article_length="{{json_encode($article_length)}}" articles="{{json_encode($article)}}"></site-body>
    <site-footer @update_page="setType"></site-footer>
</div>

<script type="module">
    import SiteHeader from '/js/components/siteHeader.js';
    import SiteBody from '/js/components/siteBody.js';
    import SiteFooter from '/js/components/siteFooter.js';
    let vm = Vue.createApp({
        components: {
            SiteHeader, SiteBody, SiteFooter,
        },
        data: function (){
            return {
                type: null
            }
        },
        methods: {
            setType: function (value) {
                console.log("val: " + value)
                this.$data.type = value;
            }
        }
    }).mount('#bigApp');
</script>

</body>
</html>
