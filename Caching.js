const express = require('express');
const redis = require('redis');

const app = express();

// Create Redis Client
const client = redis.createClient();

// Connect Redis
client.on('connect', () => {
    console.log("Redis Connected");
});

// Route
app.get('/', (req, res) => {

    // Check Cache
    client.get('message', (err, data) => {

        if (data) {
            return res.send(`From Redis Cache: ${data}`);
        }

        // Store Data
        client.set('message', 'Welcome to Task 79 Redis Caching');

        res.send("Fresh Data Stored in Redis");

    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});