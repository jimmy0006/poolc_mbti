const sequelize = require('./DBconnector')
const {DataTypes} = require('sequelize')
const Result = sequelize.define('result',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    q0:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q1:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q2:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q3:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q4:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q5:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q6:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    q7:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},{
    freezeTableName:true,
    timestamps:true,
    createdAt:true
})

Result.sync()

module.exports = Result