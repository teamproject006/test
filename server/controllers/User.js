const {User}=require("../database-sequelize/models/sequelizeschema")
const bcrypt=require("bcrypt")
const {createTokens}=require("../utils/JWT")


module.exports={
    Register:(req,res)=>{
        const {username,password}=req.body
        bcrypt.hash(password,10).then((hash)=>{
            User.create({
                username:username,
                password:hash
            }).then((result)=>{
                res.status(201).json("user registered")
            }).catch(err=>{
                if(err){
                    res.status(500).json({errooor:err})
                }
            })
        })
    },
    login:async (req,res)=>{
        const {username,password}=req.body
        const user=await User.findOne({where:{username:username}})
        if(!user){
            res.status(400).json({error:"user doesn't exist "})
        }
        const dbPassword=user.password
             bcrypt.compare(password,dbPassword).then((match)=>{
                if(!match){
                    res.status(400).json({error:"Wrong Password"})
                }else{
                    const accessToken=createTokens(user)
                    res.cookie("access-token",accessToken,{
                        maxAge:60*60*24*30*1000
                    })

                    res.status(200).json("logged")
                }
             })
            
        

    },
    profile:(req,res)=>{
                res.send("profile")
    }
}