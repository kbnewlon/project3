const db = ('../models');

//create adventure rating route
module.exports = (app) => {
    app.put('./Adventure_rating/:id', function (req,res){
    db.Adventure_rating.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        if (!data) {
            res.status(404).json(data)
        } else {
            data.addRating(req.params.Adventure_rating_id)
            res.status(200).json(data)
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});

};
