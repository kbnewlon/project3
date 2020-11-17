const express = require("express");


app.use(
    "/api",
    passport.authenticate("jwt", { session: false }),
    secureAPIRoute);


const secureAPIRoute = require("./routes/secure-api-routes");


module.exports = app;