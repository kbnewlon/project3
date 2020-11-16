const db = require('../models');

//delete adventure route
module.exports = (app) => {
    app.delete('/tag/:id', function (req, res) {
        db.Tag.destroy({
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