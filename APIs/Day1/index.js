const express = require('express');
const app = express();

app.get('/home',(req , res)=> {
    return res.send("This is a home Page");
})
app.get('/about',(req,res)=> {
    return res.send("This is my first API");
})

app.get('/time',(req,res)=>{
    return res.send(Date());
})
const PORT = 3000;
app.listen(PORT ,()=> {
    console.log("app running at port 3000")
})