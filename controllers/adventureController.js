const express = require("express");
const router = express.Router();
const db = require("../models");

//create new adventure

router.post("/adventure", function (req, res) {
    db.Adventure.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        AdventureCompanyId: req.body.AdventureCompanyId,
    })
        .then(function (data) {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// delete adventure
router.delete('/adventure/:id', function (req, res) {
    db.Adventure.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        console.log(data)
        res.status(200).json(data)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router

