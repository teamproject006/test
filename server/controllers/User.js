const {User}=require("../database-sequelize/models/sequelizeschema")


module.exports={
    addUser:(req,res)=>{
        User.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))
    }
}