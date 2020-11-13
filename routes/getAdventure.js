const db = require("../models");

//get all adventures
app.get('/adventures', function (req, res) {
    db.Adventure.findAll({}).then(function (data) {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});


//get one adventure 
app.get("/adventure/:id", function (req, res) {
    db.Adventure.findOne({ where: { id: req.params.id } }).then(function (data) {
        res.json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});




module.exports = app;