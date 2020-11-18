module.exports = function (sequelize, type) {
    const Company_user = sequelize.define('Company_user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: type.STRING,
            allowNull: false,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },

        email: {
            type: type.TEXT,
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
    Company_user.associate = function (models) {
        Company_user.hasOne(models.Adventure_company, {
            foreignKey: {
                allowNull: true
            }
        });
    }
    return Company_user;

};
