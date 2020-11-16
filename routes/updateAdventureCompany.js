const db = require('../models');

//update adventure company route 
module.exports = (app) => {
    app.put("/adventure/company/:id", function (req, res) {
        db.Adventure_company.findOne({
            where: { id: req.params.id },
        })
            .then(function (companyInfo) {
                console.log(companyInfo);
                companyInfo.update({
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
                    CompanyUserId: req.body.CompanyUserId,
                });
                res.status(200).json(companyInfo);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    });
};


