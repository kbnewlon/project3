const db = require('../models');

//delete adventure company route
module.exports = (app) => {
    app.delete('/company/:id', function (req, res) {
        db.Adventure_company.destroy({
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