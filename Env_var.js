require('dotenv').config();

const express = require('express');

const app = express();

// Access Environment Variables
const PORT = process.env.PORT;

const SECRET_KEY = process.env.SECRET_KEY;

const APP_NAME = process.env.APP_NAME;

// Home Route
app.get('/', (req, res) => {

    res.send(`
        App Name: ${APP_NAME} <br>
        Secret Key: ${SECRET_KEY}
    `);

});

// Start Server
app.listen(PORT, () => {

    console.log(`${APP_NAME} running on port ${PORT}`);

});
