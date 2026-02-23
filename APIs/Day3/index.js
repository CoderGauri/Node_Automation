const express = require("express");
const app = express();
app.use(express.json());

const Shop = [
  { id: 1, pName: "Pen", pPrice: 30 },
  { id: 2, pName: "Pencil", pPrice: 20 },
  { id: 3, pName: "Scale", pPrice: 10 },
  { id: 4, pName: "marker", pPrice: 40 },
];

//get all products
app.get("/Shop", (req, res) => {
  res.json(Shop);
});
//search filter
app.get("/Shop/search", (req, res) => {
    console.log("Query Received:",req.query)
  const searchQuery = req.params.name;
  if(!searchQuery){
    return res.status(404).json({message :"please provode prduct name"})
    const result = Shop.filter(searchQuery.toLowerCase())
    res.json(result);
  }
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App runing on port 3000");
});
