const router = require('express').Router();
const {Register,login,profile} = require("../controllers/User");
const {createRent}=require("../controllers/Rental")
const {createService}=require("../controllers/Services")
const  {validateToken}=require("../utils/JWT")


// user Route

router.post("/",validateToken,profile)
router.post("/register", Register);
router.post("/login",login)


//Rent Routes 
router.post("/addRental",createRent)


//Service Routes
router.post("/addService",createService)
// router.get ("/getAllService",getAllServices)

module.exports = router;
