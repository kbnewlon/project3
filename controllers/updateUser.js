const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

// Update user 
router.put('/updateUser', (req, res, next) => {
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
                    userInfo
                        .update({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            city: req.body.city,
                            state: req.body.state,
                            image: req.body.image
                        })
                        .then(() => {
                            console.log('user updated');
                            res.status(200).send({ auth: true, message: 'user updated' });
                        });
                } else {
                    console.error('no user exists in db to update');
                    res.status(401).send('no user exists in db to update');
                }
            });
        }
    })(req, res, next);
});

module.exports = router