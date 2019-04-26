//NPM Packages Required
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express Configuration
var app = express();

//PORT Listener
var PORT = process.env.port || 8080;

//Express data parsing
app.use(bodyParser.urlencoded({ extended = true }));
app.use(bodyParser.json());

//Routes
require(".app/routing/apiRoutes.js")(app);
require(".app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function(){
    console.log("Listeningon PORT:" + PORT);
});