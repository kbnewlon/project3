const express = require("express");
const router = express.Router();
const db = require("../models");

// create new adventure
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
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// delete adventure
router.delete("/adventure/:id", function (req, res) {
    db.Adventure.destroy({
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

// get all adventures
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

// get one adventure
router.get("/adventure/:id", function (req, res) {
    db.Adventure.findOne({
        where: {
            id: req.params.id,
        },
        include: [db.Adventure_rating, db.Adventure_company, db.Tag],
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// update adventure
router.put("/adventure/:id", function (req, res) {
    db.Adventure.findOne({
        where: { id: req.params.id },
    })
        .then(function (adventureInfo) {
            adventureInfo.update({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                longitude: req.body.longitude,
                latitude: req.body.latitude,
                AdventureCompanyId: req.body.AdventureCompanyId
            });
            res.status(200).json(adventureInfo);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router

