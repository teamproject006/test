const express = require("express");
const usersRoutes = require('./routes/AuthRoutes')
const serviceRoutes = require('./routes/servicesRoutes')
const sequelize=require("./database-sequelize/config")
const cookieParser=require("cookie-parser")
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 3004


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use(cors({
  origin:["http://localhost:3000"],
  methods:["POST,GET"],
  credentials:true
}))


app.use("/api/users", usersRoutes);
app.use("/api/services",serviceRoutes)
sequelize.sync().then(()=>{
    console.log("database connected ")
    
  }).catch((err)=>console.log(err))
  sequelize.authenticate().then(()=>{
    console.log("connection has been established successfully ")
    
  }).catch((err)=>console.error("unable to connect to the database :",err))
  

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
