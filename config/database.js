require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0
    }
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.',process.env.DB_DATABASE);
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err)
    })

module.exports = sequelize