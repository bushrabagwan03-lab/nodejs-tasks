const express = require('express');

const app = express();

app.use(express.json());

// Home Route
app.get('/', (req, res) => {

    res.send(`
        <h2>Task 91 Client-Server Connection</h2>

        <button onclick="getData()">
            Get Server Data
        </button>

        <h3 id="result"></h3>

        <script>

            async function getData() {

                const response = await fetch('/api/data');

                const data = await response.json();

                document.getElementById('result').innerText =
                    data.message;

            }

        </script>
    `);

});

// API Route
app.get('/api/data', (req, res) => {

    res.json({

        message: "Data received from Node.js Server"

    });

});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});