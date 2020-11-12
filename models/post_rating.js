module.exports = function (sequelize, type) {
    const Post_rating = sequelize.define('Post_rating', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

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
