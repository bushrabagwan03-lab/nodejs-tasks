const fs = require('fs');

// Create Read Stream
const readStream = fs.createReadStream('demo.txt', 'utf8');

// Read Data from Stream
readStream.on('data', (chunk) => {
    console.log("Received Chunk:");
    console.log(chunk);
});

// Stream End Event
readStream.on('end', () => {
    console.log("File Reading Completed");
});