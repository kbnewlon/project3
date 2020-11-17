const { response } = require("express");
const db = require("../models");
const stream = require('getstream');

module.exports = (app) => {

    const client = stream.connect(process.env.STREAM_API_KEY, process.env.STREAM_KEY_SECRET, process.env.STREAM_APP_ID);
    //generate following data
    app.get("/following/:username", function (req, res) {
        const currentUser = client.feed('timeline', req.params.username);
        currentUser.following().then((followingInfo) => {
            res.status(200).json(followingInfo.results)
        }).catch((err) => {
            res.status(500).json(err);
        });
    })
    //generate followers data
    app.get("/followers/:username", function (req, res) {
        const currentUser = client.feed('timeline', req.params.username);
        currentUser.followers().then((followersInfo) => {
            res.status(200).json(followersInfo.results)
        }).catch((err) => {
            res.status(500).json(err);
        });
    })
}
