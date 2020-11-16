const db = require("../models");

// delete adventure tag
module.exports = (app) => {
    app.delete('./adventure/:id/:tag_id', function (req, res) {
        db.Adventure.destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            console.log(data)
            res.status(200).json(data)

        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
};
