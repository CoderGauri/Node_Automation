const express = require('express');
//const mongoose = require ('mongoose');
const app = express();
app.use(express.json());

const users = [{name:"gauri" , age:"27" , id:1},{name:"Rahul" , age:"26",id:2}]

// mongoose.connect(
//   "mongodb+srv://dbgauri:Gauri%401029@backenddb.riqln1s.mongodb.net/BackendDB?retryWrites=true&w=majority"
// )
// .then(() => {
//     console.log("Database is connected");
// })
// .catch((err) => {
//     console.log("Database didn't connect:", err.message);
// });
const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("serve is running at port 3000")
})

app.get('/' ,(req ,res)=> {
    res.send(users);
})

app.get("/users/:id",(req , res)=> {
    const id = parseInt(req.params.id);
    const user = users.find (u => u.id === id);

if(!user){
    return res.status(404).send("user not found")
}
res.json(user);
})
 app.post("/users",(req,res)=>{
    const newUser = {
        id :users.length +1 ,
        name : req.params.name,
        age : req.params.age

    }
    users.push(newUser);
    res.status(201).json(newUser);

 })