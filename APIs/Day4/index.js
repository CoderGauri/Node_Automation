const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Node app in building");
});
const getProducts = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

const saveProducts = (products) => {
  fs.writeFileSync("data.json", JSON.stringify(products, null, 2));
};
app.get("/Shop", (req, res) => {
  const products = getProducts();
  return res.json(products);
});

app.post("/Shop", (req, res) => {
  const products = getProducts();
  const newProduct = req.body;
  console.log("Incoming data :", newProduct);
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json({
    message: "product added successfully",
    data: newProduct,
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App running at PORT 3000");
});
