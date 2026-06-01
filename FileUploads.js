const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Storage Configuration
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }

});

// Upload Middleware
const upload = multer({ storage: storage });

// Home Route
app.get('/', (req, res) => {

    res.send(`
        <h2>Task 80 File Upload</h2>

        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload File</button>
        </form>
    `);

});

// Upload Route
app.post('/upload', upload.single('myfile'), (req, res) => {

    res.send("File Uploaded Successfully");

});

// Download Route
app.get('/download', (req, res) => {

    const filePath = path.join(__dirname, 'uploads', req.query.file);

    res.download(filePath);

});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});