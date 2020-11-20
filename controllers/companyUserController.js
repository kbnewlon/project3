const express = require("express");
const router = express.Router();
const db = require("../models");


//delete company user route
router.delete('/company_user/:id', function (req, res) {
    db.Company_user.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.status(200).json(data)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

///get all company users
router.get("/company_user", function (req, res) {
    db.Company_user.findAll({
        include: {
            model: db.Adventure_company,
            include: {
                model: db.Adventure,
                include: [db.Adventure_rating, db.Tag]
            }
        }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});

//get company user by id
router.get("/company_user/:id", function (req, res) {
    db.Company_user.findOne({
        where: { id: req.params.id },
        include: {
            model: db.Adventure_company,
            include: {
                model: db.Adventure,
                include: [db.Adventure_rating, db.Tag]
            }
        }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});

//update adventure route
router.put("/company_user/:id", function (req, res) {
    db.Company_user.findOne({
        where: { id: req.params.id },
    })
        .then(function (userInfo) {
            userInfo.update({
                user_name: req.body.user_name,
                password: req.body.password,
                email: req.body.email,
            });
            res.status(200).json(userInfo);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});



module.exports = router