// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express")
const Cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const db = require("./models");


const app = express();
require("dotenv").config();

// Static directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./auth/auth.js");

app.use(Cors());
app.use(helmet());
app.use(passport.initialize());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 2 * 60 * 60 * 1000,
        },
    })
);

require("./routes/createCompanyUser")(app);
require("./routes/createAdventureCompany")(app);
require("./routes/createAdventure")(app);
require("./routes/createTag")(app);
require("./routes/createTagAdventure")(app);
require("./routes/getAdventure")(app);
require("./routes/getAdventureCompany")(app);
require("./routes/getCompanyUser")(app);
require("./routes/getTag")(app);
require("./routes/loginUser")(app);
require("./routes/registerUser")(app);
require("./routes/forgotPassword")(app);
require("./routes/resetPassword")(app);
require("./routes/updatePassword")(app);
require("./routes/updatePasswordViaEmail")(app);
require("./routes/findUsers")(app);
require("./routes/deleteUser")(app);
require("./routes/updateUser")(app);


var PORT = process.env.PORT || 3000;

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Listening for on PORT " + PORT);
    });
});