const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const admin = require('./router/admin')
const result = require('./router/result')
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(cookieParser(process.env.SECRET))
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',admin);
app.use('*',(req,res,next)=>{
    if(req.cookies.done){
        res.send('Already Done!')
    }else{
        next()
    }
})
app.use('/result',result);


app.listen(3000,()=>{
    console.log("listening on port : 3000")
})