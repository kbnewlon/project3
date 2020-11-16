const db = require("../models");

//get all adventures
module.exports = (app) => {
    app.get("/adventures", function (req, res) {
        db.Adventure.findAll({
            include: [db.Adventure_rating, db.Adventure_company, db.Tag],
        })
            .then(function (data) {
                console.log(data);
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    //get one adventure
    app.get("/adventure/:id", function (req, res) {
        db.Adventure.findOne({
            where: {
                id: req.params.id,
            },
            include: [db.Adventure_rating, db.Adventure_company, db.Tag],
        })
            .then(function (data) {
                console.log(data);
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};
