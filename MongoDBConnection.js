const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/task86DB')

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});

// Create Schema
const userSchema = new mongoose.Schema({

    name: String,

    email: String,

    age: Number

});

// Create Model
const User = mongoose.model('User', userSchema);

// Insert Data Route
app.get('/add-user', async (req, res) => {

    const newUser = new User({

        name: "Bushra",

        email: "bushra@gmail.com",

        age: 22

    });

    await newUser.save();

    res.send("User Added Successfully");

});

// Fetch Data Route
app.get('/users', async (req, res) => {

    const users = await User.find();

    res.json(users);

});

// Home Route
app.get('/', (req, res) => {
    res.send("Task 86 Mongoose Running");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});