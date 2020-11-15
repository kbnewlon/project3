module.exports = function(sequelize, type){
    const Adventure_company = sequelize.define('Adventure_company', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        address_1: {
            type: type.STRING,
            allowNull: false,
        },
        address_2: {
            type: type.STRING,
            allowNull: true,
        },
        city: {
            type: type.STRING,
            allowNull: false,
        },
        state: {
            type: type.STRING,
            allowNull: false,
        },
        zip_code: {
            type: type.INTEGER,
            allowNull: false,
        },
        phone: {
            type: type.BIGINT,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        website: {
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
    });

    Adventure_company.associate = function (models) {
        Adventure_company.hasOne(models.Company_user, {
            foreignKey: {
                allowNull: false
            }
        });
       
    }
  
    return Adventure_company;
};
