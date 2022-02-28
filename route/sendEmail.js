
var express = require('express');
var Messageroute = express.Router();

const nodemailer = require("nodemailer");


// send Message
Messageroute.post('/SendMessage', async(req, res) => {
   let {userName,useremail,MessageText}=req.body
   console.log("object",userName)
  //  answer will be like:
   let message="<div><div><b>Message from: </b><p>"+ userName +"</p></div><div><b>User Email : </b><p>"+ useremail +"</p></div></div><div><b>Message content : </b><p>"+ MessageText +"</p><div></div>" 
  let transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            // put your email and your pass word to respond messages 
                  user: "asmasahraouisites12@gmail.com", 
                pass: "admin.123"
            },
            tls:{rejectUnauthorized: false}
    })
    let msg = {
        from: "asmasahraouisites12@gmail.com",
        to: "asmasahraoui25@hotmail.fr",
        subject: "Mail from Portfolio Site",
        html: message
        
    }
    transporter.sendMail(msg, function(err, info) {
         if (err) {
           console.log(err)
         } else {
           console.log(info);
         }})

});


module.exports = Messageroute
