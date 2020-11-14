const db = require("../models");

//get all adventures companies
app.get('/adventure/companies', function (req, res) {
    db.Adventure_company.findAll({
        include: [db.Tag, db.Rating, db.Adventure, db.tags_adventure]
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});


//get one adventure company
app.get("/adventure/company/:id", function (req, res) {
    db.Adventure_company.findOne({ 
        where: { id: req.params.id }, 
        include: [db.Tag, db.Rating, db.Adventure, db.tags_adventure]
     }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});




module.exports = app;