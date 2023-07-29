const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete','root','HDFCrr@7707',
{dialect:'mysql',host:'localhost'})

 module.exports=sequelize