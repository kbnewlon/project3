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
router.use("/user", require("./findUser"))
router.use("/user", require("./updateUser"))


// Route path secured
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./adventureController")
);
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./companyUserController")
);
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./adventureCompanyController")
);

router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./tagController")
);

router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./tagAdventureController")
);

router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./adventureRatingController")
);

module.exports = router

