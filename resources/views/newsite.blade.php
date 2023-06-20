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
{{--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">--}}
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <!-- Scripts -->
    @vite(['resources/css/app.scss', 'resources/js/app.js', 'resources/css/newSiteBody.scss', 'resources/css/newSiteFooter.scss'])
</head>
<body>
<div id="bigApp" class="mt-5">
    <new-site article_length="{{json_encode($article_length)}}" articles="{{json_encode($article)}}"></new-site>
</div>

<script>

    const socket = new WebSocket('ws://localhost:8080/newsite');

    // Handle the WebSocket connection open event
    socket.onopen = function() {

        console.log('Connected to the new Site');
    };

    // Handle the WebSocket connection error event
    socket.onerror = function(error) {
        console.error('WebSocket error:', error);
    };

    // Handle incoming messages
    socket.onmessage = function(event) {
        console.log('Message received:', event.data);
        document.getElementById("tech_improv").style.display = 'flex';
        document.getElementById("msg").innerText = "In Kürze verbessern wir Abalo für Sie! " +
        "Nach einer kurzen Pause sind wir wieder " +
        "für Sie da! Versprochen.";
    };

    // Handle the WebSocket connection close event
    socket.onclose = function(event) {
        console.log('Connection closed:', event.code, event.reason);
    };
</script>

</body>
</html>
<script>
    import {GoogleSignInButton} from "vue3-google-signin";
    export default {
        components: {GoogleSignInButton}
    }
</script>
