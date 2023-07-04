const router = require('express').Router();
const {addUser} = require("../controllers/User");
const {createRent}=require("../controllers/Rental")
const {createService}=require("../controllers/Services")


// user Route
router.post("/addUser", addUser);


//Rent Routes 
router.post("/addRental",createRent)


//Service Routes
router.post("/addService",createService)
router.get ("/getAllService",getAllServices)

module.exports = router;
