const db = require('../models');

//update adventure route 
module.exports = (app) => {
    app.put('/company_user/:id', function (req, req) {
        db.Adventure.update({
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email
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