const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require("../models");

//create new company user
router.post('/signupCompanyUser', (req, res, next) => {
    passport.authenticate('registerCompany', (err, user, info) => {
        if (err) {
            console.error(err);
        }
        if (info !== undefined) {
            console.error(info.message);
            res.status(403).send(info.message);
        } else {
            req.logIn(user, error => {
                const data = {
                    email: req.body.email,
                    username: user.username,
                };
                db.Company_user.findOne({
                    where: {
                        username: data.username,
                    },
                }).then(user => {
                    user
                        .update({
                            email: data.email,
                        })
                        .then((data) => {
                            console.log('user created in db');
                            res.status(200).send(data);
                        });
                });
            });
        }
    })(req, res, next);
});

//create new adventure company
router.post("/addCompany", function (req, res) {
    db.Adventure_company.create({
        name: req.body.name,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        description: req.body.description,
        image: req.body.image,
        CompanyUserId: req.body.CompanyUserId,
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router