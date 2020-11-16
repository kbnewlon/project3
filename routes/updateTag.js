const db = require('../models');

//update adventure route 
module.exports = (app) => {
    app.put('/tag/:id', function (req, req) {
        db.Tag.update({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
        }, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            if (data[0] === 0) {
                console.log(data);
                res.status(200).json(data)
            } else {
                res.json(data)
            }
        }).catch(err => {
            console.log(err)
            res.status(500).json(err);
        })
    });
};
