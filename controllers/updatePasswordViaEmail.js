const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require("../models");
const express = require("express");
const router = express.Router();

const Op = Sequelize.Op;



const BCRYPT_SALT_ROUNDS = 12;

router.put('/updatePasswordViaEmail', (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
      resetPasswordToken: req.body.resetPasswordToken,
      resetPasswordExpires: {
        [Op.gt]: Date.now(),
      },
    },
  }).then(user => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else if (user != null) {
      console.log('user exists in db');
      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
          user.update({
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordExpires: null,
          });
        })
        .then(() => {
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        });
    } else {
      console.error('no user exists in db to update');
      res.status(401).json('no user exists in db to update');
    }
  });
});

module.exports = router