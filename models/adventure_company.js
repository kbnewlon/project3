module.exports = function(sequelize, type){
    const Adventure_company = sequelize.define('Adventure_company', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        adventure_name: {
            type: type.STRING,
            allowNull: false,
        },
        address_1: {
            type: type.STRING,
            allowNull: false,
        },
        address_2: {
            type: type.STRING,
            allowNull: false,
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
        taxId: {
            type: type.STRING,
            allowNull: true,
        },
    });
   
  
    return Adventure_company;
};