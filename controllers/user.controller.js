// const { db } = require('../database/db_config')
const model = require('../models');

const Users = model.users;

exports.getAllUsers = async (req, res) => {
    Users.findAll().then(results => {
        return res({ success: true, results: results });
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        return res({ success: false, data: error });
    });
}
