const Models=require("../models/index")
const Joi=require("joi")
const helper=require("../helpers/commanHelper")
Models.userModel.hasMany(Models.userInterstModel,{foreignKey:"userId"})
Models.userInterstModel.belongsTo(Models.interstModel,{foreignKey:"interstId"})

module.exports={
  insert:async(req,res)=>{
   try {
    const schema=Joi.object().keys({
      name:Joi.string().required(),
      email:Joi.string().required()
    })
    let payload=await helper.validationJoi(req.body,schema) 

    let objToSave={
      name:payload.name,
      email:payload.email
    }
   let result=await Models.userModel.create(objToSave)
   return res.send(result)
   } catch (error) {
    console.log(error)  
    throw error
   }  
  },
  getAllRecord:async(req,res)=>{
    try {
        let result=await Models.userModel.findAll()
        return res.send(result)
    } catch (error) {
       console.log(error)
       throw error
    }
  },
  updateSomeRecords:async(req,res)=>{
   try {
    await Models.userModel.update({name:req.body.name},{where:{id:req.body.id}})
    let respose=await Models.userModel.findOne({where:{id:req.body.id},raw:true})
    return res.send(respose)
   } catch (error) {
    console.log(error)
    throw error
   }
  },
  updateAllRecords:async(req,res)=>{
    try {
      await Models.userModel.update({name:req.body.name},{where:{id:req.body.id}})
      let respose=await Models.userModel.findOne({where:{id:req.body.id},raw:true})
      return res.send(respose)
    } catch (error) {
        console.log(error)
        throw error  
    }
  },
  deleteRecords:async(req,res)=>{
   try {
    await Models.userModel.destroy({where:{id:req.body.id}})
    return res.send("deleted Record successfully")
   } catch (error) {
    console.log(error)
    throw error
   }
  },


  addInterst:async(req,res)=>{
    try {
      let schema=Joi.object().keys({
        name:Joi.string().required()
      })
      let payload=await helper.validationJoi(req.body,schema)
      let objToSave={
        interstName:payload.name
      }
      let result=await Models.interstModel.create(objToSave)
      return res.send(result)
    } catch (error) {
      throw error
    }
  },
  findInterest: async(req, res)=>{
    try {
      let result = await Models.interstModel.findAll()
      return res.send(result)
    } catch (error) {
      throw error
    }
  },

  addUserWithInterst: async (req, res) => {
    try {
      const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().optional(), // Include email validation
        interestId: Joi.array().required()
      });
  
      const payload = await helper.validationJoi(req.body, schema);
  
      console.log("payload", payload);
  
      const objToSave = {
        name: payload.name,
        email: payload.email // Include email field
      };
  
      // Create the user
      const user = await Models.userModel.create(objToSave);
  
      // Handle interests
      const interestIds = payload.interestId;
  
      const userInterests = interestIds.map((interestId) => ({
        interstId:interestId,
        userId: user.id
      }));
  
      await Models.userInterstModel.bulkCreate(userInterests);
  
      console.log("user", user);
  
      const response = await Models.userModel.findOne({
        where: {
          id: user.id
        },
        include: [
          {
            model: Models.userInterstModel,
            required: false,
            include: [{
              model: Models.interstModel,
              required: false
            }]
          }
        ]
      });
  
      console.log("response", response);
  
      return res.send(response);
  
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
}