const express = require("express");
const usersRoutes = require('./routes/users')
const sequelize=require("./database-sequelize/config")
const cookieParser=require("cookie-parser")
const cors=require('cors')
// const errorMiddleware=require("./middlewares/errorMiddleware")

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3004


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(errorMiddleware)
app.use(cookieParser())
// app.use(cors())
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["POST,GET"],
  credentials:true
}))


app.use("/api/users", usersRoutes);
sequelize.sync().then(()=>{
    console.log("database connected ")
    
  }).catch((err)=>console.log(err))
  sequelize.authenticate().then(()=>{
    console.log("connection has been established successfully ")
    
  }).catch((err)=>console.error("unable to connect to the database :",err))
  

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
