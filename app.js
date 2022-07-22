





express = require('express');
mongoose = require('mongoose');
productRoutes = require("./routes/productRoutes.js");
bodyParser = require('body-parser')

eobj = express();
eobj.use(bodyParser.json());
eobj.use(productRoutes);


eobj.listen(4000, (request,responce) => {
  console.log("Server is running at 4000");
});


eobj.get('/', (request, responce) =>{
  responce.send("your server is running");
});


//heare use your database link to get connect with database

Database ='mongodb+srv://sid:sid@cluster0.klunjok.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(Database).then(()=> {
  console.log("Database connection is succesful");
}).catch((err)=>{
  console.log("database Connection failed");
});