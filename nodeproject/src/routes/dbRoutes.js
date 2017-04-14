var express = require("express");
var mongodb = require("mongodb").MongoClient;

var dbRouter = express.Router();

var eventsData = [
    {
        date: "1/12/16",
        time: "12:05",
        name: "First event",
        description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah. End."
    },
    {
        date: "2/12/16",
        time: "11:16",
        name: "2nd event",
        description: "blah blah .dd"
    },
    {
        date: "3/12/16",
        time: "15:30",
        name: "3rd event",
        description: "blah blah blah blah.xx "
    }
];

dbRouter.route("/AddEventData") //https://mean-stack-frankc60.c9users.io/Events/
    .get(function(req,res) {
       // res.send("successful test");
       
       var url = "mongodb://localhost:27017/eventsApp";
       mongodb.connect(url, function(err, db) {
           var collection = db.collection("events");
           collection.insertMany(eventsData, function(err,results) {
               res.send(results);
               db.close();
           });
           
       });
       
    });
    

module.exports = dbRouter;
