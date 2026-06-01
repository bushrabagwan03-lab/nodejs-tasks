const fs = require('fs');

// Create File
fs.writeFileSync('demo.txt', 'This is Task 71 File System API');

// Read File
const data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Content:");
console.log(data);

// Update File
fs.appendFileSync('demo.txt', '\nThis line is added later.');

console.log("File Updated Successfully");

// Delete File
//fs.unlinkSync('demo.txt');

console.log("File Deleted Successfully");