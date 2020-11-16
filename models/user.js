module.exports = function (sequelize, type) {
  const User = sequelize.define('User', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: type.STRING,
    last_name: type.STRING,
    email: {
      type: type.STRING,
      allowNull: false,
    },
    username: {
      type: type.STRING,
      allowNull: false,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
    city: {
      type: type.STRING,
      allowNull: true,
    },
    state: {
      type: type.STRING,
      allowNull: true,
    },
    image: {
      type: type.STRING,
      allowNull: true,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
    
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
  User.associate = function (models) {
    User.hasMany(models.Adventure_rating)
  }

  return User;
};