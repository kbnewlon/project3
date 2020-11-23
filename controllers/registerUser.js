const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");
const stream = require('getstream');

const client = stream.connect(
  process.env.STREAM_API_KEY,
  process.env.STREAM_KEY_SECRET,
  process.env.STREAM_APP_ID,
  { location: 'us-east' },
);

// Register user 
router.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err);
    }
    if (info !== undefined) {
      console.error(info.message);
      res.status(403).send(info.message);
    } else {
      // eslint-disable-next-line no-unused-vars
      req.logIn(user, error => {
        const data = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          username: user.username,
        };
        db.User.findOne({
          where: {
            username: data.username,
          },
        }).then(user => {
          client.user(data.username).create({
            name: `${data.first_name} ${data.last_name}`
          });
          user
            .update({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
            })
            .then(() => {
              console.log('user created in db');
              res.status(200).send({ message: 'user created' });
            });
        });
      });
    }
  })(req, res, next);
});

module.exports = router