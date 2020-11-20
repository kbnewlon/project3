const express = require("express");
const router = express.Router();
const db = require("../models");
const stream = require('getstream');
const client = stream.connect(process.env.STREAM_API_KEY, process.env.STREAM_KEY_SECRET, process.env.STREAM_router_ID);

// Generate following data
router.get("/following/:username", function (req, res) {
    const currentUser = client.feed('timeline', req.params.username);
    currentUser.following().then((followingInfo) => {
        res.status(200).json(followingInfo.results)
    }).catch((err) => {
        res.status(500).json(err);
    });
});

// Generate followers data
router.get("/followers/:username", function (req, res) {
    const currentUser = client.feed('timeline', req.params.username);
    currentUser.followers().then((followersInfo) => {
        res.status(200).json(followersInfo.results)
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router