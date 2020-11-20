const express = require("express");
const router = express.Router();
const db = require("../models");
const stream = require('getstream');



const client = stream.connect(process.env.STREAM_API_KEY, process.env.STREAM_KEY_SECRET, process.env.STREAM_router_ID);
//Adding User Post
router.post("/userPost/:username", function (req, res) {
    const currentUser = client.feed('timeline', req.params.username);
    const globalUser = client.feed('timeline', "globalUser")
    const userId = currentUser.userId
    db.User.findOne({
        where: {
            username: req.params.username,
        },
    }).then((userInfo) => {
        db.Post.create({
            name: `${userInfo.first_name} ${userInfo.last_name}`,
            description: req.body.description,
            image: req.body.image,
            title: req.body.title,
            UserId: userInfo.id,
        })
        activity = {
            actor: userId,
            user: userId,
            name: `${userInfo.first_name} ${userInfo.last_name}`,
            profileImage: userInfo.image,
            verb: 'post',
            object: `${req.body.title}\n${req.body.description}`,
            image: req.body.image,
            foreign_id: `post:${req.body.image}`,
            started_at: new Date(),
        };
        globalUser.addActivity(activity);

    }).then(function (data) {
        res.status(200).json(data);
    })
        .catch((err) => {
            res.status(500).json(err);
        });

})


router.get("/userPosts", function (req, res) {

    const globalUser = client.feed('timeline', "globalUser")
    globalUser.get({
        limit: 20, enrich: true,
        reactions: { own: true, counts: true, recent: true },
    })
        .then((data) => {
            res.status(200).json(data.results);
        })
        .catch((err) => {
            res.status(500).json(err);
        });


})

module.exports = router