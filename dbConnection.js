const Sequelize = require('sequelize')
var sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_HOST,
        dialect: "mysql"
    }

);
var connectdb = ()=> {
    sequelize.authenticate()
    .then(()=> {
        sequelize.sync({alter: false}),
        console.log("connection is done and sync also")
    })
    .catch(err => {
        console.log("unable to connect", err)
    })
}
module.exports = {
    connectdb : connectdb,
    sequelize : sequelize
}