const {Service}=require("../database-sequelize/models/sequelizeschema")


module.exports={
    createService:(req,res)=>{
        Service.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))
    }
}