const passport = require('passport');
const db = require("../models");
const bcrypt = require('bcrypt');
const express = require("express");
const router = express.Router();
const BCRYPT_SALT_ROUNDS = 12;

// Update password 
router.put('/updatePassword', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.error(err);
        }
        if (info !== undefined) {
            console.error(info.message);
            res.status(403).send(info.message);
        } else {
            db.User.findOne({
                where: {
                    username: req.body.username,
                },
            }).then((userInfo) => {
                if (userInfo != null) {
                    console.log('user found in db');
                    bcrypt
                        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
                        .then((hashedPassword) => {
                            userInfo.update({
                                password: hashedPassword,
                            });
                        })
                        .then(() => {
                            console.log('password updated');
                            res
                                .status(200)
                                .send({ auth: true, message: 'password updated' });
                        });
                } else {
                    console.error('no user exists in db to update');
                    res.status(404).json('no user exists in db to update');
                }
            });
        }
    })(req, res, next);
});

module.exports = router