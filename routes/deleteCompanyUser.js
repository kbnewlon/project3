const db = require('../models');

app.delete('/company_user/:id', function (req,res){
    db.Company_user.destroy({
        where:{
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

module.exports = app;