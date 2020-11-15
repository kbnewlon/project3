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
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })
    Tag.associate = function (models) {
        Tag.belongsToMany(models.Adventure, {
            through: "tags_adventures"
        });
    };
    return Tag;
};