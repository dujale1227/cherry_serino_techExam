
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        age: {
            type: DataTypes.NUMBER
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    },{timestamps:true})

    return User

}