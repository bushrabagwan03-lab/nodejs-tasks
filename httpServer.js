const http = require('http');

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === '/') {
        res.write("Welcome to Home Page");
        res.end();
    }

    // About Route
    else if (req.url === '/about') {
        res.write("Welcome to About Page");
        res.end();
    }

    // Contact Route
    else if (req.url === '/contact') {
        res.write("Welcome to Contact Page");
        res.end();
    }

    // 404 Route
    else {
        res.write("404 Page Not Found");
        res.end();
    }

});

// Listen on Port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});