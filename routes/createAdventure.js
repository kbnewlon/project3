const db = require("./models");

//create new adventure
app.post('/adventure', function (req, res) {
    db.Adventure.create({
        AdventureId: req.body.AdventureId,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        Adventure_companyId: req.body.Adventure_companyId,
        TagId: req.body.TagId,
        Adventure_ratingId: req.body.Adventure_ratingId
    }).then(function (data) {
        console.log(data);
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    })
});