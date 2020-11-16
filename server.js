// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express")
const Cors = require("cors");
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



require("./routes/createCompanyUser")(app);
require("./routes/createAdventureCompany")(app);
require("./routes/createAdventureRating")(app);
require("./routes/createAdventure")(app);
require("./routes/createTag")(app);
require("./routes/createTagAdventure")(app);
require("./routes/deleteAdventure")(app);
require("./routes/deleteAdventureCompany")(app);
require("./routes/deleteAdventureRating")(app);
require("./routes/deleteCompanyUser")(app);
require("./routes/deleteTag")(app);
require("./routes/deleteTagAdventure")(app);
require("./routes/getAdventure")(app);
require("./routes/getAdventureCompany")(app);
require("./routes/getCompanyUser")(app);
require("./routes/getTag")(app);
require("./routes/updateAdventure")(app);
require("./routes/updateAdventureCompany")(app);
require("./routes/updateCompanyUser")(app);
require("./routes/updateTag")(app);
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