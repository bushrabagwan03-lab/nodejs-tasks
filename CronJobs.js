const cron = require('node-cron');

// Schedule Cron Job
cron.schedule('*/5 * * * * *', () => {

    console.log("Cron Job Executed");
    console.log("Current Time:", new Date().toLocaleTimeString());

});

console.log("Cron Job Started...");