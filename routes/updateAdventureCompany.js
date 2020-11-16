const db = require('../models');

//update adventure company route 
module.exports = (app) => {
    app.put('/adventure/company/:id', function (req, req) {
        db.Adventure_company.update({
            name: req.body.name,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            phone: req.body.phone,
            email: req.body.email,
            website: req.body.website,
            description: req.body.description,
            image: req.body.image,
            taxId: req.body.taxId,
            Company_userId: req.body.Company_userId,
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