const db = require("./models");

//create new adventure company
app.post('/adventure/company', function (req, res) {
    db.Adventure_company.create({
        Adventure_companyId: req.body.Adventure_companyId,
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
    }).then(function (data) {
        console.log(data);
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    })
});

module.exports = app;