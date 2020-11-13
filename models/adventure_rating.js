module.exports = function (sequelize, type) {
    const Adventure_rating = sequelize.define('Adventure_rating', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }


    });
    Adventure_rating.associate = function (models) {
        Adventure_rating.belongsTo(models.Adventure, {
            foreignKey: {
                allowNull: false
            }
        });
        Adventure_rating.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Adventure_rating;
};
