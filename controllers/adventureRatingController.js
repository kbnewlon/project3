const express = require("express");
const router = express.Router();
const db = require("../models");

// create adventure rating
router.post('/adventure_rating/:id', function (req, res) {
    console.log(req.user.dataValues.id)
    db.Adventure_rating.findAll({
        where: {
            AdventureId: req.params.id,
            UserId: req.user.dataValues.id
        }
    }).then(ratings => {
        if (ratings.length === 0) {
            db.Adventure_rating.create({
                AdventureId: req.params.id,
                UserId: req.user.dataValues.id
            }).then(updateRating => {
                if (!updateRating) {
                    res.status(404).json(updateRating)
                } else {
                    res.json(updateRating)
                }
            }).catch(err => {
                console.log(err)
                res.status(500).json(err);
            })
        } else {
            res.json(ratings);
        }
    })
})

// delete adventure rating 
router.delete('/adventure_rating/:id/:userId', function (req, res) {
    db.Adventure_rating.destroy({
        where: {
            AdventureId: req.params.id,
            UserId: req.params.userId
        }
    }).then(data => {
        console.log(data)
        res.status(200).json(data)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//get like count
router.get('/adventure_rating/:id', function (req, res){
    db.Adventure_rating.count({
        where: {
            AdventureId: req.params.id
        }
    }).then(count => {
        console.log(count)
        res.status(200).json(count)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})



module.exports = router