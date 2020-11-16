module.exports = function(sequelize, type){
    const Company_user = sequelize.define('Company_user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
       user_name: {
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
      companyId: {
            type: type.INTEGER,
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
   
    })
    
    return Company_user;
};
