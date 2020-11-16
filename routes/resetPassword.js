const Sequelize = require('sequelize');
const db = require("../models");
const Op = Sequelize.Op;

module.exports = (app) => {
  app.get('/reset/:id', (req, res) => {
    db.User.findOne({
      where: {
        resetPasswordToken: req.params.id,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then((user) => {
      if (user == null) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else {
        res.status(200).send({
          username: user.username,
          message: 'password reset link a-ok',
        });
      }
    });
  });
};
