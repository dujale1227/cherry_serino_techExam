module.exports = (sequelize, DataTypes) => {
    const Treasure = sequelize.define("treasures", {
        name: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.NUMBER
        },
        longtitude: {
            type: DataTypes.NUMBER
            // allowNull defaults to true
        }
    },{timestamps:true})

    return Treasure

}