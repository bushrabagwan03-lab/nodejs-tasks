const { exec } = require('child_process');

// Execute Terminal Command
exec('dir', (error, stdout, stderr) => {

    // Handle Error
    if (error) {
        console.log(`Error: ${error.message}`);
        return;
    }

    // Handle Standard Error
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    // Display Output
    console.log("Directory Files:");
    console.log(stdout);
});

//You can open calculator on Windows:


exec('calc');