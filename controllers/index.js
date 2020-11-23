const express = require("express");
const router = express.Router();
const passport = require('passport');

router.get("/", (req, res) => {
    res.send("welcome to minnesvart!");
})

// Unsecure routes in file
router.use("/user", require("./registerUser"));
router.use("/user", require("./loginUser"));
router.use("/user", require("./deleteUser"));
router.use("/user", require("./forgotPassword"));
router.use("/user", require("./resetPassword"));
router.use("/user", require("./updatePassword"));
router.use("/user", require("./updatePasswordViaEmail"));
router.use("/company", require("./signupCompanyUser"));
router.use("/company", require("./loginCompanyUser"));
router.use("/company", require("./adventureLandingController"));

// Secured in file
router.use("/user", require("./findUser"));
router.use("/user", require("./updateUser"));
router.use("/user", require("./getStream"));
router.use("/company", require("./findCompany"));



// Route path secured
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./adventureController")
);
router.use("/api_company", passport.authenticate('jwtCompany', { session: false }),
    require("./adventureController")
);
router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./companyUserController")
);

router.use("/api_company", passport.authenticate('jwtCompany', { session: false }),
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

router.use("/api", passport.authenticate('jwt', { session: false }),
    require("./userPostController")
);

module.exports = router

