const db = require("../models");

//create new adventure
module.exports = (app) => {
    app.post("/tag", function (req, res) {
        db.Tag.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
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
