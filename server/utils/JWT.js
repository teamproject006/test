const {sign,verify}=require("jsonwebtoken")

const createTokens=(user)=>{
    const accessToken=sign({username:user.username,id:user.id},'secretKeyy',{expiresIn:"30d"})
    return accessToken
}
const validateToken=(req,res,next)=>{
    
    const accessToken=req.body.token

    if(!accessToken){
        res.json({Message:"user not authenticated"})
    }else{
            verify(accessToken,"secretKeyy",(err,d)=>{
                if(err){
                    return res.json({Message:"Authentication Error"})
                }else{
                     req.username=d.username
                     req.accessToken=accessToken
                     next()
                }
            })
    }
    // try{
    //     const validToken=verify(accessToken,"secretKeyy")
    //     if(validToken){
    //         req.authenticated=true
    //         return next();
    //     }

    // }catch(err){
    //     return res.status(400).json({error:err})
    // }
}

module.exports={
    createTokens,validateToken
}