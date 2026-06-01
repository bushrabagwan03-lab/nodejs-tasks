const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Create Rate Limiter
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests
    message: "Too many requests. Please try again later."
});

// Apply Rate Limiter
app.use(limiter);

// Route
app.get('/', (req, res) => {
    res.send("Welcome to Task 78 API Rate Limiting");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});