<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Articles</title>
    <script src="https://unpkg.com/vue@next"></script>
    <style>
        .popup-layer {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

    </style>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/css/app.scss', 'resources/js/app.js', 'public/js/navMenu.js', 'public/js/cookiecheck.js', 'public/js/cart.js'])
</head>
<body>
<nav id="navId">
    @if(isset($user_data))
        <p style="color: white">Account <span id="user_data_id">{{$user_data['id']}}</span>: {{$user_data['user']}} eingeloggt</p>
    @else
        <p style="color: white">Als Gast eingeloggt</p>
    @endif
</nav>
<article id="articleId"></article>
@if(isset($user_data))
<div id="sold_container" class="container">
    <h1>Product Notification</h1>
    <div id="popupLayer" class="popup-layer">
        <h4 id="productName"></h4>
        <button class="btn btn-dark" onclick="hidePopup()">Close</button>
    </div>
</div>
@endif
<div id="app" class="mt-5">
    <main id="mainForm" class="py-4">
        <form method="get" action="{{url('/api/articles')}}">
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
                        <th>to cart</th>
                        <th>sell</th>
                    </tr>
                    @foreach($article as $value => $item)
                        <tr id="row{{$item->id}}">
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
                            <td>
                                @if(isset($user_data))
                                    @if(in_array($item, $u_article))
                                        <button class="btn text-white bg-dark" onclick="sell_article({{$item->id}})">Sell</button>
                                    @endif
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </main>
</div>
</body>
<script>

    const num = document.getElementById("user_data_id").innerText;

    // To make it work, open a Firefox tab, go to port localhost:8888 (php artisan serve --port=8888)
    // in private mode
    // and log in with another account
    // User 1 should still be logged in using port 8000
    // Websocket Server should still be running on port 8080
    function sell_article(id) {
        let row = document.getElementById("row" + id);
        row.setAttribute("class", "font-weight-bold");
        row.style.backgroundColor = "#9ca3af";
        axios.get("/api/articles/" + id + "/sell").then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        }).then(() => {
            console.log("Idunno");
        });
    }

    function hidePopup() {
        document.getElementById("popupLayer").style.display = "none";
    }
    // Create a new WebSocket connection
    const socket = new WebSocket('ws://localhost:8080/sold');

    // Handle the WebSocket connection open event
    socket.onopen = function() {
        console.log('Connected Sold Articles');
    };

    // Handle the WebSocket connection error event
    socket.onerror = function(error) {
        console.error('WebSocket error:', error);
    };

    socket.onmessage = function(event) {
        const message = JSON.parse(event.data)
        if (parseInt(num) === parseInt(message.u_id)) {
            document.getElementById("productName").innerText = message.text;
            document.getElementById("popupLayer").style.display = "block";
            console.log('Message received:', event.data);
        }
    };

    // Handle the WebSocket connection close event
    socket.onclose = function(event) {
        console.log('Connection closed:', event.code, event.reason);
    };


    const connect = new WebSocket('ws://localhost:8080/sell');
    connect.onopen = function() {
        console.log('Connected Sell Articles');
    };

    // Handle the WebSocket connection error event
    connect.onerror = function(error) {
        console.error('WebSocket Sell error:', error);
    };


    connect.onmessage = function(event) {
        const message = JSON.parse(event.data)
        if (parseInt(num) !== parseInt(message.u_id)) {
            document.getElementById("productName").innerText = message.text;
            document.getElementById("popupLayer").style.display = "block";
            console.log('Message received:', event.data);
        }
    };

    connect.onclose = function(event) {
        console.log('Connection Sell closed:', event.code, event.reason);
    };

</script>
</html>
