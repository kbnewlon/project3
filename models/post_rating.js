module.exports = function (sequelize, type) {
    const Post_rating = sequelize.define('Post_rating', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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

    Post_rating.associate = function (models) {
        
        Post_rating.belongsTo(models.Post, {
           
            foreignKey: { 

                allowNull: true
            }
        });
    
        Post_rating.belongsTo(models.User, {
           
            foreignKey: { 

                allowNull: true 
             }
        });
    };

    return Post_rating;
}
