const nodemailer = require('nodemailer');

// Create Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bushrabagwan03@gmail.com',
        pass: 'fourbsyjxlvrnjdi'
    }
});

// Email Details
const mailOptions = {
    from: 'bushrabagwan03@gmail.com',
    to: 'bushraaa1750@gail.com',
    subject: 'Task 77 Nodemailer',
    text: 'Email sent successfully using Node.js'
};

// Send Email
transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email Sent Successfully");
        console.log(info.response);
    }

});