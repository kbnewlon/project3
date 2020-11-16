const db = ('../models');

//delete adventure rating route
module.exports = (app) => {
    app.delete('./Adventure_rating/:id', function (req, res) {
        db.Adventure_rating.destroy({
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
