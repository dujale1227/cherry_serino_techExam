'use strict';
const sequelize = require('../config/database')

const { Sequelize, DataTypes } = require('sequelize');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./user.model')(sequelize,DataTypes)
db.treasures = require('./treasures.model')(sequelize,DataTypes)
db.money = require('./money.model')(sequelize,DataTypes)

db.treasures.hasMany(db.money);
db.money.belongsTo(db.treasures);

db.sequelize.sync({force: false})
.then(() => {
  console.log('Sequelize sync done')
})
.catch((err )=>{ console.log("error") })

module.exports = db
