const db = require("../models");

module.exports = (app) => {
    app.get("/company_user", function (req, res) {
        db.Company_user.findAll({
            include: {
                model: db.Adventure_company,
                include: {
                    model: db.Adventure,
                    include: [db.Adventure_rating, db.Tag]
                }
            }
        }).then(function (data) {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json(err)
        });
    });


    app.get("/company_user/:id", function (req, res) {
        db.Company_user.findOne({
            where: { id: req.params.id },
            include: {
                model: db.Adventure_company,
                include: {
                    model: db.Adventure,
                    include: [db.Adventure_rating, db.Tag]
                }
            }
        }).then(function (data) {
            res.status(200).json(data);
        }).catch(err => {
            res.status(500).json(err)
        });
    });
}



