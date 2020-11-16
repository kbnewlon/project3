module.exports = function (sequelize, type) {
    const Adventure = sequelize.define('Adventure', {
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
        longitude: {
            type: type.FLOAT,
            allowNull: true,
        },
        latitude: {
            type: type.FLOAT,
            allowNull: true,
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
    });

    Adventure.associate = function (models) {
        Adventure.belongsTo(models.Adventure_company, {
            foreignKey: {
                allowNull: false
            }
        });
        Adventure.hasMany(models.Adventure_rating, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Adventure;
};

