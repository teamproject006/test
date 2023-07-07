const {User}=require("../database-sequelize/models/sequelizeschema")
const bcrypt=require("bcrypt")
const {createTokens}=require("../utils/JWT")


module.exports={
    Register:(req,res)=>{
        const {username,password,email,imageUrl,phoneNumber}=req.body
        bcrypt.hash(password,10).then((hash)=>{
            User.create({
                username,
                password:hash,
                email,
                imageUrl,
                phoneNumber

            }).then(()=>{
                return res.status(201).json("user registered")
            }).catch(err=>{
                    res.json({errooor:err})
                
            })
        })
    },
    login:async (req,res)=>{
        const {username,password}=req.body
        const user=await User.findOne({where:{username:username}})
        
        if(user===null){
            return res.json({error:"user doesn't exist "})
        }else{
            const dbPassword=user.password
             bcrypt.compare(password,dbPassword).then((match)=>{
                if(!match){
                   return  res.json({Message:"Wrong Password"})
                }else{
                    const accessToken=createTokens(user)
                    res.cookie("token",accessToken,{
                        withCredentials:true,
                        maxAge:60*60*24*30*1000,
                        httpOnly:false
                    })
                    res.status(200).json({user:user,token:accessToken})
                }
             })
          
        }
        
            
        

    },
    profile:async(req,res)=>{
        // const token = req.headers.authorization || req.cookies.jwt;
        const user=await User.findOne({where:{username:req.username}})
       
        return res.json({Status:"success",user})
    }   
}