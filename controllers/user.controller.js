const { db } = require('../database/db_config')

exports.getAllUsers = (req,res)=> {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(results);
    });
}

