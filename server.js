const express=require('express')
const path=require('path')
const fs=require('fs')
require('dotenv').config();
const port=process.env.PORT||6000
var bodyParser = require('body-parser')
const app=express()

var bodyParser = require('body-parser')
const Messageroute=require('./route/sendEmail')

app.use(bodyParser.json());
app.use('/api/messages',Messageroute)
if (process.env.NODE_ENV==='production')
{
   app.use(express.static('Client/build')) 
}

// Config for  heroku
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('Client/build'))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'Client','build','index.html'))
})
}
// port
app.listen(port,(err)=>{
    (err)?console.log(err):console.log(`the server is running on port ${port}`)
})
