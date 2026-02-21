const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Gauri", role: "backend Developer" },
  { id: 2, name: "Amit", role: "Fullstack  Developer" },
  { id: 3, name: "Neha", role: "Frontend Developer" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/count" ,(req ,res)=> {
    let count = users.length;
    res.json({total:count});
})

app.get("/users/:id", (req, res) => {
  let user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("not found");
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log("PORT running at 3000");
});
