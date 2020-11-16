const db = require('../models');

//create adventure rating route
module.exports = (app) => {
    app.post('/adventure_rating/:id/:userId', function (req, res) {
        db.Adventure_rating.findAll({
            where: {
                AdventureId: req.params.id,
                UserId: req.params.userId
            }
        }).then(ratings => {
            if (ratings.length === 0) {
                db.Adventure_rating.create({
                    AdventureId: req.params.id,
                    UserId: req.params.userId
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

};


