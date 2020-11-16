const db = require("../models");

module.exports = (app) => {
    //get all adventures companies
    app.get("/companies", function (req, res) {
        db.Adventure_company.findAll({
            include: {
                model: db.Adventure,
                include: [db.Adventure_rating, db.Tag]
            }
        }).then(function (data) {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json(err)
        });
    });


    //get one adventure company
    app.get("/company/:id", function (req, res) {
        db.Adventure_company.findOne({
            where: {
                id: req.params.id,
            },
            include: {
                model: db.Adventure,
                include: [db.Adventure_rating, db.Tag]
            },
        })
            .then(function (data) {
                console.log(data);
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
}