const WebSocket = require('ws');

// Create WebSocket Server
const server = new WebSocket.Server({ port: 3000 });

console.log("WebSocket Server running on ws: http//localhost:3000");

// Connection Event
server.on('connection', (socket) => {

    console.log("Client Connected");

    // Send Message to Client
    socket.send("Welcome Client!");

    // Receive Message from Client
    socket.on('message', (message) => {
        console.log(`Message from Client: ${message}`);
    });

});