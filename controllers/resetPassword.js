const Sequelize = require('sequelize');
const db = require("../models");
const express = require("express");
const router = express.Router();
const Op = Sequelize.Op;

// Reset password  
router.get('/reset/:id', (req, res) => {
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


module.exports = router