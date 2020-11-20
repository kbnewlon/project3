const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

// Get company user and verify 
router.get('/findCompanyUser', (req, res, next) => {
    passport.authenticate('jwtCompany', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            res.status(401).send(info.message);
        } else if (user.username === req.query.username) {
            db.Company_user.findOne({
                where: {
                    username: req.query.username,
                },
            }).then((userInfo) => {
                if (userInfo != null) {
                    console.log('user found in db from findUsers');
                    res.status(200).send({
                        auth: true,
                        email: userInfo.email,
                        username: userInfo.username,
                        password: userInfo.password,
                        message: 'user found in db',
                    });
                } else {
                    console.error('no user exists in db with that username');
                    res.status(401).send('no user exists in db with that username');
                }
            });
        } else {
            console.error('jwt id and username do not match');
            res.status(403).send('username and jwt token do not match');
        }
    })(req, res, next);
});

module.exports = router