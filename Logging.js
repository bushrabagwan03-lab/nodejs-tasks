const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

// Morgan Middleware
app.use(morgan('dev'));

// Winston Logger Setup
const logger = winston.createLogger({

    level: 'info',

    format: winston.format.simple(),

    transports: [

        new winston.transports.Console(),

        new winston.transports.File({
            filename: 'app.log'
        })

    ]

});

// Home Route
app.get('/', (req, res) => {

    logger.info('Home Route Accessed');

    res.send('Task 85 Logger Running');

});

// Error Route
app.get('/error', (req, res) => {

    logger.error('Error Route Triggered');

    res.status(500).send('Internal Server Error');

});

// Start Server
app.listen(3000, () => {

    logger.info('Server Started on Port 3000');

    console.log("Server running at http://localhost:3000");

});