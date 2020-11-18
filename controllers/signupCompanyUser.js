const express = require("express");
const router = express.Router();
const db = require("../models");

//create new company user
router.post("/company_user", function (req, res) {
    db.Company_user.create({
        user_name: req.body.user_name,
        password: req.body.password,
        email: req.body.email,
    })
        .then(function (data) {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router