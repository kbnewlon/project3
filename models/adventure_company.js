module.exports = function (sequelize, type) {
    const Adventure_company = sequelize.define('Adventure_company', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: true,
        },
        address_1: {
            type: type.STRING,
            allowNull: true,
        },
        address_2: {
            type: type.STRING,
            allowNull: true,
        },
        city: {
            type: type.STRING,
            allowNull: true,
        },
        state: {
            type: type.STRING,
            allowNull: true,
        },
        zip_code: {
            type: type.INTEGER,
            allowNull: true,
        },
        phone: {
            type: type.BIGINT,
            allowNull: true,
        },
        email: {
            type: type.STRING,
            allowNull: true,
        },
        website: {
            type: type.STRING,
            allowNull: true,
        },

        description: {
            type: type.TEXT,
            allowNull: true,
        },
        image: {
            type: type.STRING,
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

    Adventure_company.associate = function (models) {
        Adventure_company.belongsTo(models.Company_user, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return Adventure_company;
};
