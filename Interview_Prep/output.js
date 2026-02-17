const express =  require('express');
const app = express();

app.use(express.json());

const users = [{PName:"Joy" ,age:29 ,PID:1001 },
    {PName:"Jim" ,age:39 ,PID:1002 },
    {PName:"Joss" ,age:49 ,PID:1003 },
]

app.get('/users' ,(req ,res) =>{
    res.json(users);
});

// app.get('/users/:pid' , (req , res) = {
//     const pid = parseInt(req.params.pid);

//   const user = users.find(u => u.PID === pid);

//     if(!users){
//         return res.status(404).send("user not found ")
//     }
//     res.json(users);
// })

app.get('/users/:pid', (req, res) => {
  const pid = parseInt(req.params.pid);

  const user = users.find(u => u.PID === pid);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});

const PORT = 3000;
app.listen(PORT , () => console.log(`Server is running on PORT ${PORT}`))