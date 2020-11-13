const db = require('../models');

//update adventure route 
app.put('/adventure/:id', function (req, req) {
    db.Adventure.update({
        AdventureId: req.body.AdventureId,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        Adventure_companyId: req.body.Adventure_companyId,
        TagId: req.body.TagId,
        Adventure_ratingId: req.body.Adventure_ratingId
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data[0] === 0) {
            console.log(data);
            res.status(200).json(data)
        } else {
            res.json(data)
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

module.exports = app;