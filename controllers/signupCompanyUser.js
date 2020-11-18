const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

//create new company user
router.post('/signup_company_user', (req, res, next) => {
    passport.authenticate('registerCompany', (err, user, info) => {
        if (err) {
            console.error(err);
        }
        if (info !== undefined) {
            console.error(info.message);
            res.status(403).send(info.message);
        } else {
            req.logIn(user, error => {
                console.log(user);
                const data = {
                    email: req.body.email,
                    username: user.username,
                };
                console.log(data);
                db.Company_user.findOne({
                    where: {
                        username: data.username,
                    },
                }).then(user => {
                    console.log(user);
                    user
                        .update({
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