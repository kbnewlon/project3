const db = require('../models');

//update adventure route 
module.exports = (app) => {
    app.put("/tag/:id", function (req, res) {
        db.Tag.findOne({
            where: { id: req.params.id },
        })
            .then(function (tagInfo) {
                console.log(tagInfo);
                tagInfo.update({
                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image,
                }).then((data) => {
                    console.log(data)
                });
                res.status(200).json(tagInfo);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};
