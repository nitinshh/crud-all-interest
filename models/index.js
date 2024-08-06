const Sequelize = require('sequelize');
const sequelize = require('../dbConnection').sequelize

module.exports = {
        userModel: require('./userModel') (Sequelize, sequelize, Sequelize.DataTypes),
        interstModel:require("./interstModel")(Sequelize,sequelize,Sequelize.DataTypes),
        userInterstModel:require("./userInterstModel")(Sequelize,sequelize,Sequelize.DataTypes)
}