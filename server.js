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
require("./auth/authCompany.js");

//PRODUCTION CORS
app.use(Cors({
    origin:["https://minnesvart.herokuapp.com", "http://localhost:8080"]
}));

app.use(helmet());
app.use(passport.initialize());

const allRoutes = require('./controllers');
app.use('/', allRoutes);


var PORT = process.env.PORT || 3000;

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("Listening for on PORT " + PORT);
    });
});