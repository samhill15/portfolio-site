const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());


let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

transport.verify((err, success) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running with no errors: ${success}`);
    }
});

app.post("/send", (req, res) => {
    let options = {
            from:  `${req.body.email}`,
            to: process.env.EMAIL,
            subject: `${req.body.name}: ${req.body.email}`,
            text: `${req.body.message}`
        };
        
    transport.sendMail(options, (err, data) => {
        if (err) {
            console.log(`Error sending mail: ${err}`);
            res.json({
                    error: true,
                data: {}
            });
        } else {
            console.log('Email sent successfully!');
            res.json({
                    error: false,
                    data: options
                });
            }
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});