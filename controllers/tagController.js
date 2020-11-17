const express = require("express");
const router = express.Router();
const db = require("../models");

//create new adventure tag
router.post("/tag", function (req, res) {
    db.Tag.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
    })
        .then(function (data) {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//delete adventure tag
router.delete('/tag/:id', function (req, res) {
    db.Tag.destroy({
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


//get all tags
router.get("/tags", function (req, res) {
    db.Tag.findAll({})
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//get one tag
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

//update tag
router.put("/tag/:id", function (req, res) {
    db.Tag.findOne({
        where: { id: req.params.id },
    })
        .then(function (tagInfo) {
            console.log(tagInfo);
            tagInfo.update({
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
            }).then((data) => {
                console.log(data)
            });
            res.status(200).json(tagInfo);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


module.exports = router