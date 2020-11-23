const express = require("express");
const router = express.Router();
const db = require("../models");

// Create new tag
router.post("/tag", function (req, res) {
    db.Tag.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Delete tag
router.delete('/tag/:id', function (req, res) {
    db.Tag.destroy({
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


// Get all tags
router.get("/tags", function (req, res) {
    db.Tag.findAll({})
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Get one tag
router.get("/tag/:id", function (req, res) {
    db.Tag.findOne({
        where: { id: req.params.id },
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Update tag
router.put("/tag/:id", function (req, res) {
    db.Tag.findOne({
        where: { id: req.params.id },
    })
        .then(function (tagInfo) {
            tagInfo.update({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            }).then((data) => {
                res.status(200).json(tagInfo);
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


module.exports = router