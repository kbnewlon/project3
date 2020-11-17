const express = require("express");
const router = express.Router();
const passport = require('passport')

router.get("/", (req, res) => {
    res.send("welcome to minnesvart!")
})

// unsecure routes in file
router.use("/user", require("./registerUser"))
router.use("/user", require("./loginUser"))

// Secured in file



// Route path secured
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./adventureController")
);


module.exports = router

