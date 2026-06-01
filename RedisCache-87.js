const express = require('express');
const redis = require('redis');

const app = express();

// Create Redis Client
const client = redis.createClient();

// Redis Connected
client.on('connect', () => {
    console.log("Redis Connected");
});

// Home Route
app.get('/', (req, res) => {

    // Check Cache
    client.get('product', (err, data) => {

        // If Cache Exists
        if (data) {

            return res.send(`From Cache: ${data}`);

        }

        // Fresh Data
        const productData = "Laptop Price: ₹55000";

        // Store Cache with Expiry (10 seconds)
        client.setex('product', 10, productData);

        res.send("Fresh Data Stored in Redis");

    });

});

// Delete Cache Route
app.get('/clear-cache', (req, res) => {

    client.del('product');

    res.send("Cache Deleted Successfully");

});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});