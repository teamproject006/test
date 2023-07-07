const router = require('express').Router();
const {Register,login,profile} = require("../controllers/AuthControllers");
const  {validateToken}=require("../utils/JWT")



router.post("/",validateToken,profile)
router.post("/register", Register);
router.post("/login",login)


module.exports = router;
