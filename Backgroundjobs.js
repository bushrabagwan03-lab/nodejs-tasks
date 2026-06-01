const express = require('express');
const Queue = require('bull');

const app = express();

// Create Queue
const myQueue = new Queue('taskQueue');

// Add Job Route
app.get('/add-job', async (req, res) => {

    await myQueue.add({
        message: 'Background Job Processing'
    });

    res.send("Job Added to Queue");

});

// Process Queue
myQueue.process(async (job) => {

    console.log("Processing Job...");
    console.log(job.data.message);

});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});