const {Rental}=require("../database-sequelize/models/sequelizeschema")


module.exports={
    createRent:(req,res)=>{
        Rental.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))

    }
}