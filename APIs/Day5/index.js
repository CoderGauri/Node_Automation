const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

//to check if the application is running fine
app.get("/", (req, res) => {
  return res.send("The application is running ");
});

//helper function to get the data from data.json
const getProducts = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

//to get all the product list
app.get("/Products", (req, res) => {
  const Products = getProducts();
  res.json(Products);
});

//query param to search filter
app.get("/Products/search", (req, res) => {
    try{
  const { category, minprice, maxprice, name, brand } = req.query;
  let result = getProducts();
  if (brand) {
    result = result.filter(
      (p) => p.brand.toLowerCase() === brand.toLowerCase(),
    );
  }
  if (name) {
    result = result.filter(
      (p) => p.name.toLowerCase() === name.toLowerCase(),
    );
  }
  if (maxprice) {
    result = result.filter(
      (p) => p.maxprice.toLowerCase() === maxprice.toLowerCase(),
    );
  }
  if (minprice) {
    result = result.filter(
      (p) => p.minprice.toLowerCase() === minprice.toLowerCase(),
    );
  }
  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }
  return res.json(result); 
}
catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
});

//post a product 
const saveProducts = (Products)=> {
    fs.writeFileSync('./data.json' , JSON.stringify(Products , null , 2))
}
app.post('/Products' , (req , res)=>{
try {
    
}
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App running at port 3000");
});
