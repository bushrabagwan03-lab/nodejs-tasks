const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json());

// Validation Schema
const userSchema = Joi.object({

    username: Joi.string().min(3).required(),

    email: Joi.string().email().required(),

    password: Joi.string().min(6).required()

});

// Route
app.post('/register', (req, res) => {

    // Validate Data
    const { error } = userSchema.validate(req.body);

    // If Validation Fails
    if (error) {

        return res.status(400).json({
            message: error.details[0].message
        });

    }

    // Success Response
    res.json({
        message: "Registration Successful",
        data: req.body
    });

});

// Home Route
app.get('/', (req, res) => {
    res.send("Task 84 Joi Validation Running");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});