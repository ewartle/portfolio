const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require("./routes");
const app = express();
const nodemailer = require("nodemailer");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/happy-choice");

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());
//app.use(routes);

app.use(express.static(__dirname + '/client/build/'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.post("/send", (req, res) => {

let first = req.body[1];
let last = req.body[2];
let email = req.body[0];
let message = req.body[3];

     var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
            user: "smartgroupdecision@gmail.com", // generated ethereal user
           pass: "1354!#%$" // generated ethereal password
        },
        tls:{
          rejectUnauthorized: false
        }
   
    });

    
    let mailOptions = {
        from: '<smartgroupdecision@gmail.com>', // sender address
        to: "ewartle@gmail.com", // list of receivers
        subject: 'New Contact', // Subject line
        html: "Email: " + email + ". First Name: " + first + ". Last Name: " + last + ". Message: " + message // html body
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
    //  smtpTransport.sendMail(mailOptions, function(error, response){
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        
    });

});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})