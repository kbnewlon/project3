const express = require("express");
const router = express.Router();
const db = require("../models");

// Create new adventure
// router.post("/adventure", function (req, res) {
//     db.Adventure.create({
//         name: req.body.name,
//         description: req.body.description,
//         image: req.body.image,
//         longitude: req.body.longitude,
//         latitude: req.body.latitude,
//         AdventureCompanyId: req.body.AdventureCompanyId,
//     })
//         .then(function (data) {
//             res.status(200).json(data);
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });
router.post("/adventure", function (req, res) {

    db.Adventure.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        AdventureCompanyId: req.body.AdventureCompanyId,
    })
        .then(function (newAdventureData) {
            for (let i = 0; i < req.body.tags.length; i++) {
                const tag = req.body.tags[i];
                db.Tag.create({
                    name: tag,
                    description: tag,
                    image: tag
                })
                    .then(function (newTagData) {
                        db.Adventure.findOne({
                            where: {
                                id: newAdventureData.id
                            },
                        })
                            .then(function (data) {
                                if (!data) {
                                    res.status(404).json(data);
                                } else {
                                    data.addTag(newTagData.id);
                                }
                            })
                            .catch((err) => {
                                res.status(500).json(err);
                            });
                    })
                    .catch((err) => {
                        res.status(500).json(err);
                    });
            }
            res.status(200).json("New Adventures Added");
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Delete adventure
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

// Un-secure route in adventureLandingController 
// Get all adventures secure 
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

// Get one adventure
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

