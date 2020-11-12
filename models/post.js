module.exports = function(sequelize, type){
    const Post = sequelize.define('Post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
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
    });
    Post.associate = function (models){
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
    })};
    return Post;
};
