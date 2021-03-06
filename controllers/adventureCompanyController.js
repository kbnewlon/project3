const express = require("express");
const router = express.Router();
const db = require("../models");

// ---------------------------------> Create New Company route is in signupCompanyUser.js <----------------------------------

// Delete adventure company
router.delete('/company/:id', function (req, res) {
    db.Adventure_company.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.status(200).json(data)

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get all adventures companies
router.get("/companies", function (req, res) {
    db.Adventure_company.findAll({
        include: {
            model: db.Adventure,
            include: [db.Adventure_rating, db.Tag]
        }
    }).then(function (data) {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json(err)
    });
});

// Get one adventure company
router.get("/company/:id", function (req, res) {
    db.Adventure_company.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            model: db.Adventure,
            include: [db.Adventure_rating, db.Tag]
        },
    })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// Update adventure company  
router.put("/adventure/company/:id", function (req, res) {
    db.Adventure_company.findOne({
        where: { id: req.params.id },
    })
        .then(function (companyInfo) {
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



module.exports = router