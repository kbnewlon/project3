const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

// Get company user and verify 
router.get('/findCompanyUser', (req, res, next) => {
    passport.authenticate('jwtCompany', { session: false }, (err, user, info) => {
        console.log("HERE :", user.username)
        console.log("OTHER :", req.query.username)
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
                include: {
                    model: db.Adventure_company,
                    include: {
                        model: db.Adventure,
                        include: [db.Adventure_rating, db.Tag]
                    }
                }
            }).then((userInfo) => {
                if (userInfo != null) {
                    console.log('user found in db from findUsers');
                    res.status(200).send({
                        auth: true,
                        id: userInfo.id,
                        email: userInfo.email,
                        username: userInfo.username,
                        password: userInfo.password,
                        Adventure_company: userInfo.Adventure_company,
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