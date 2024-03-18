const model  = require('../models');

const Treasure = model.treasures;

exports.getAllTreasures = async (req, res, next) => {
    Treasure.findAll().then(results => {
        req.body['treasures'] = results;
        next();
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        return res.status(500).json({ error: 'Internal server error' });
    });
}

exports.treasuresDistance = async (req, res, next) => {
    // Validate inputs
    if (!req.body.clat || !req.body.clong || !req.body.dist || !['1', '10'].includes(req.body.dist)||(req.body.prize % 1)) {
        return res.status(500).send({ success: false, message: 'Invalid parameters' });
    }
    // Parse input values
    const lat = parseFloat(req.body.clat);
    const lon = parseFloat(req.body.clong);
    const dist = parseInt(req.body.dist);
    const treasures = req.body.treasures;
    let distTreasure = [];
    let treasure_id = [];
    const mapLoop = treasures.map(async treasure => {
        var distance = calculateDistance(lat, lon, treasure.latitude, treasure.longtitude);
        if (parseInt(distance) == dist) {
            treasure['distance'] = parseInt(distance);
            distTreasure.push(await treasure)
            treasure_id.push(await treasure.id)
        };
    })

    setTimeout(async () => {
        Promise.all(mapLoop).then(async () => {
            req.body['treasures'] = distTreasure;
            req.body['treasure_id'] = treasure_id;
            if(distTreasure.length > 0){
                next();
            }else{
                return  res.status(200).json({ success: false, message: "No treasure found base on the input." });
            }
           
        });
    }, 100);
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}