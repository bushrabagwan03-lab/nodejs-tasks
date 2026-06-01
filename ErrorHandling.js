const express = require('express');

const app = express();

app.use(express.json());

// Home Route
app.get('/', (req, res) => {

    res.send("Task 89 Error Handling Running");

});

// Error Route
app.get('/error', (req, res, next) => {

    try {

        // Simulated Error
        throw new Error("Something Went Wrong");

    } catch (error) {

        next(error);

    }

});

// Custom Error Middleware
app.use((err, req, res, next) => {

    console.log("Error:", err.message);

    res.status(500).json({

        success: false,

        message: err.message

    });

});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});