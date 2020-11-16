const db = require("../models");

// delete adventure tag
module.exports = (app) => {
    app.delete('/adventure/:id/:tag_id', function (req, res) {
        db.Adventure.findOne({
            where: {
                id: req.params.id,
            },
        })
            .then(function (data) {
                if (!data) {
                    res.status(404).json(data);
                } else {
                    data.removeTag(req.params.tag_id);
                    res.status(200).json(data);
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};
