const db = require("../models");

//create adventure tag route
module.exports = (app) => {
    app.post("/adventure/:id/:tag_id", function (req, res) {
        db.Adventure.findOne({
            where: {
                id: req.params.id,
            },
        })
            .then(function (data) {
                if (!data) {
                    res.status(404).json(data);
                } else {
                    data.addTag(req.params.tag_id);
                    res.status(200).json(data);
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};
