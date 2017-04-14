var express = require("express");

var dbRouter = express.Router();

dbRouter.route("/AddEventData") //https://mean-stack-frankc60.c9users.io/Events/
    .get(function(req,res) {
       
       res.send("successful test");
       
    });
    

module.exports = dbRouter;
