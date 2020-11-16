const db = require('../models')

//delete adventure rating route
module.exports = (app) => {
    app.delete('/adventure_rating/:id/:userId', function (req, res) {
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
};