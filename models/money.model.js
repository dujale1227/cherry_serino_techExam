module.exports = (sequelize, DataTypes) => {
    const Money = sequelize.define("money_values", {
        treasureId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        amt: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    },{timestamps:true})

    return Money

}