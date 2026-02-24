const express = require("express");
const app = express();
app.use(express.json());

const Shop = [
  { id: 1, pName: "pen", pPrice: 30 },
  { id: 2, pName: "pencil", pPrice: 10 },
];

app.get("/", (req, res) => {
  return res.send("Node app in building");
});
app.get("/Shop", (req, res) => {
  return res.json(Shop);
});

app.post('/Shop' , (req , res)=> {
    const newProduct = req.body;
    console.log("Incoming data :" ,newProduct);
    Shop.push(newProduct);
    res.status(201).json({
        message:"product added successfully",
        data:newProduct
    })})
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App running at PORT 3000");
});
