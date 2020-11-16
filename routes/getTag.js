const db = require("../models");

module.exports = (app) => {
    //get all adventures
    app.get("/tags", function (req, res) {
        db.Tag.findAll({})
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });

    //get one adventure
    app.get("/tag/:id", function (req, res) {
        db.Tag.findOne({
            where: { id: req.params.id },
        })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};
