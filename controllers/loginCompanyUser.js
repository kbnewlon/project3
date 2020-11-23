const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require("../models");

// Log in company user
router.post('/loginCompanyUser', (req, res, next) => {
  passport.authenticate('loginCompany', (err, users, info) => {
    if (err) {
      console.error(`error ${err}`);
    }
    if (info !== undefined) {
      console.error(info.message);
      if (info.message === 'bad username') {
        res.status(401).send(info.message);
      } else {
        res.status(403).send(info.message);
      }
    } else {
      req.logIn(users, () => {
        db.Company_user.findOne({
          where: {
            username: req.body.username,
          },
        }).then(user => {
          const token = jwt.sign({ id: user.id }, process.env.JWT_COMPANY_SECRET, {
            expiresIn: 60 * 60,
          });
          const id = user.id
          res.status(200).send({
            auth: true,
            id,
            token,
            message: 'user found & logged in',
          });
        });
      });
    }
  })(req, res, next);
});

module.exports = router
