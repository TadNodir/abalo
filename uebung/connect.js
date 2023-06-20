
// Create a new WebSocket connection
const socket = new WebSocket('localhost:8080');

// Handle the WebSocket connection open event
socket.onopen = function() {
    console.log('Connected');
};

// Handle the WebSocket connection error event
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Handle incoming messages
socket.onmessage = function(event) {
    console.log('Received message:', event.data);
};

// Handle the WebSocket connection close event
socket.onclose = function(event) {
    console.log('Connection closed:', event.code, event.reason);
};
