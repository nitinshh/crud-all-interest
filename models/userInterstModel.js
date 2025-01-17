module.exports=(Sequelize,sequelize,DataTypes)=>{
     return sequelize.define("userInterst",{
        ...require("./cors")(Sequelize,DataTypes),
        userId:{
          type:Sequelize.UUID,
          reference:{
            model:"user",
            key:"id"
          },
          onUpdate:"CASCADE",
          onDelete:"CASCADE"
        },
        interstId:{
          type:Sequelize.UUID,
          reference:{
            model:"interst",
            key:"id"
          },
          onUpdate:"CASCADE",
          onDelete:"CASCADE"
        }
     },{
        tableName:"userInterst"
     })
}