const _ = require('lodash');
const model = require('../models');
const { Op } = require("sequelize");
const Money = model.money;
const Treasures = model.treasures;

exports.getAllUsers = async (req, res) => {
    Money.findAll().then(results => {
        res.status(200).json(results);
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        return res.status(500).json({ error: 'Internal server error' });
    });
}

exports.moneyTreasure = async (req, res) => {
    let prize = parseInt(req.body.prize);
    Money.findAndCountAll({
        attributes: [
            [Money.sequelize.fn("MIN", Money.sequelize.col("amt")), 'prize'],
            'treasureId',
            [Treasures.sequelize.col("name"), "name"],
            [Treasures.sequelize.col("latitude"), "latitude"],
            [Treasures.sequelize.col("longtitude"), "longtitude"],
        ],
        where: {
            amt: {
                [Op.gte]: 10,
                [Op.lte]: prize,
            },
            treasureId: req.body.treasure_id,

        },
        include: [
            {
                model: Treasures,
                where: {
                    id: Money.sequelize.col("treasureId")
                },
                attributes: [],
                required: true,
                right: true
            }
        ],
        raw: true
    }).then(results => {
        if(results.count > 0){
            
            return  res.status(200).json({ success: true, result:results.rows });
        }else{
           return  res.status(200).json({ success: true, result:req.body.treasures});
        }
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        return res.status(500).json({ error: 'Internal server error' });
    });
}
