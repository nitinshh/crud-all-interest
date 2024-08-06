module.exports=(Sequelize,sequelize,DataTypes)=>{
    return sequelize.define("interst",{
        ...require("./cors")(Sequelize,DataTypes),
           interstName:{
            type: DataTypes.STRING(255),
            allowNull:true
           }
    },{
        tableName:"interst"
    })
}