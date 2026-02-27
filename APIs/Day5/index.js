const fs = require('fs')
const express = require('express');
const app = express();
app.use(express.json());


app.get('/' ,(req ,res)=>{
    return res.send("The application is running ");
})

const getProducts = () => {
    const data = fs.readFileSync("data.json");
    return JSON.parse(data);
}

app.get('/Products' ,(req, res )=> {
    const Products = getProducts();
    res.json(Products);
})


const PORT = 3000;
app.listen(PORT , ()=> {
    console.log("App running at port 3000");
})