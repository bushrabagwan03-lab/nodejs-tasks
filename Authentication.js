const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Login Route
app.post('/login', (req, res) => {

    const user = {
        id: 1,
        username: "admin"
    };

    // Generate Token
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

    res.json({
        message: "Login Successful",
        token: token
    });

});

// Middleware for Token Verification
function verifyToken(req, res, next) {

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).send("Token Required");
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, decoded) => {

        if (err) {
            return res.status(401).send("Invalid Token");
        }

        req.user = decoded;

        next();

    });

}

// Protected Route
app.get('/profile', verifyToken, (req, res) => {

    res.json({
        message: "Protected Profile Accessed",
        user: req.user
    });

});

app.get('/', (req, res) => {
    res.send("Task 83 JWT Authentication Running");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});