const express = require('express');
const axios = require('axios');

const app = express();

// Home Route
app.get('/', (req, res) => {

    res.send("Task 90 External API Running");

});

// External API Route
app.get('/users', async (req, res) => {

    try {

        // Fetch Data from External API
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        // Send API Data
        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            message: "Error Fetching External API"
        });

    }

});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});