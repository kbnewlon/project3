const db = require('../models');

//update adventure route 
module.exports = (app) => {
    app.put('/adventure/:id', function (req, res) {
        db.Adventure.findOne({
            where: { id: req.params.id },
        })
            .then(function (adventureInfo) {
                console.log(adventureInfo);
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
};
