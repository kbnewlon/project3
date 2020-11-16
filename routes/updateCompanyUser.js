const db = require('../models');

//update adventure route 
module.exports = (app) => {
    app.put("/company_user/:id", function (req, res) {
        db.Company_user.findOne({
            where: { id: req.params.id }
        }).then(function (userInfo) {
            console.log(userInfo)
            userInfo.update({
                user_name: req.body.user_name,
                password: req.body.password,
                email: req.body.email
            });
            res.status(200).json(userInfo);
        }).catch(err => {
            res.status(500).json(err)
        });
    });
};