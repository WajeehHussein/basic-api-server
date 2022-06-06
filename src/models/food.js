'use strict';


const Food = (sequelize, DataTypes) => {
    sequelize.define("Food", { // create a table
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}

module.exports = Food;