const express = require('express');
const mongoose = require ('mongoose');
const app = express();

mongoose.connect(
  "mongodb+srv://dbgauri:Gauri%401029@backenddb.riqln1s.mongodb.net/BackendDB?retryWrites=true&w=majority"
)
.then(() => {
    console.log("Database is connected");
})
.catch((err) => {
    console.log("Database didn't connect:", err.message);
});
const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("serve is running at port 3000")
})

app.get('/' ,(req ,res)=> {
    res.send("hello from node API");
})