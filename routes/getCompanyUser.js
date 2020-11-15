const db = require("../models");

app.get("/company_user", function (req, res) {
    db.Company_user.findAll({
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});


app.get("/company_user/:id", function (req, res) {
    db.Company_user.findOne({ 
        where: { id: req.params.id }, 
     }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});




module.exports = app;