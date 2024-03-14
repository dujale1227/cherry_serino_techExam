const { db } = require('../database/db_config');
const _ = require('lodash');

exports.getAllMoney = (req,res)=> {
    db.query('SELECT * FROM money_values', (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(results);
    });

}
exports.moneyTreasure = (req,res)=> {
    const sql = '(SELECT MIN(amt) AS prize,treasure_id FROM money_values WHERE treasure_id = ? AND amt >= 10 AND amt <= ? )';
    let mergeTreasures = [];
    db.query(sql, [req.body.treasure_id, req.body.prize], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if(results.length > 0){
            mergeTreasures = _.map(req.body.treasures, function(treasItem){
                return _.extend(treasItem, _.find(results, { treasure_id: treasItem.id }));
            })
            return  res.status(200).json({ success: true, result:mergeTreasures });
        }else{
           return  res.status(200).json({ success: true, result:req.body.treasures});
        }
    });

}