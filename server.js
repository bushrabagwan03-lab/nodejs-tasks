// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Send response
    res.write("Welcome to Task 69 Node.js Server");

    // End response
    res.end();
});

// Heroku-compatible port
const PORT = process.env.PORT || 3000;

// Server listen on port 3000
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});