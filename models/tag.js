module.exports = function (sequelize, type) {
    const Tag = sequelize.define('Tag', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: type.STRING,
            allowNull: false,
        },

        description: {
            type: type.TEXT,
            allowNull: false,
        },
        image: {
            type: type.STRING,
            allowNull: false,
        }
    })
    Tag.associate = function (models) {
        Tag.belongsTo(models.Adventure, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Tag;
};