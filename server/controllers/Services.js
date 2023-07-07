const {Service}=require("../database-sequelize/models/sequelizeschema")


module.exports={
    createService:(req,res)=>{
        Service.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))
    }
}
// async (req,res)=>{
//     const {username,password}=req.body
//     const user=await User.findOne({where:{username:username}})
//     if(!user){
//         res.status(400).json({error:"user doesn't exist "})
//     }
//     const dbPassword=user.password
//          bcrypt.compare(password,dbPassword).then((match)=>{
//             if(!match){
//                return  res.status(400).json({Message:"Wrong Password"})
//             }else{
//                 const accessToken=createTokens(user)
//                 res.cookie("token",accessToken,{
//                     withCredentials:true,
//                     maxAge:60*60*24*30*1000,
//                     httpOnly:false
//                 })

//                 res.status(200).json({user:user,token:accessToken})
//             }
//          })
        
    

// }