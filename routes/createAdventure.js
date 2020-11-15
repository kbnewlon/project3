const db = require("../models");

//create new adventure
app.post('/adventure', function (req, res) {
    db.Adventure.create({ 
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        Adventure_companyId: req.body.Adventure_companyId
    }).then(function (data) {
        console.log(data);
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    })
});

module.exports = app;