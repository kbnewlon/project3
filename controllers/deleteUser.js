const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

// Delete user 
router.delete('/deleteUser', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.error(err);
        }
        if (info !== undefined) {
            console.error(info.message);
            res.status(403).send(info.message);
        } else {
            db.User.destroy({
                where: {
                    username: req.query.username,
                },
            })
                .then((userInfo) => {
                    if (userInfo === 1) {
                        console.log('user deleted from db');
                        res.status(200).send('user deleted from db');
                    } else {
                        console.error('user not found in db');
                        res.status(404).send('no user with that username to delete');
                    }
                })
                .catch((error) => {
                    console.error('problem communicating with db');
                    res.status(500).send(error);
                });
        }
    })(req, res, next);
});

module.exports = router