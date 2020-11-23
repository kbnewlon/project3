const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all adventures un-secure  
router.get("/adventures", function (req, res) {
    db.Adventure.findAll({
        include: [db.Adventure_rating, db.Adventure_company, db.Tag],
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router