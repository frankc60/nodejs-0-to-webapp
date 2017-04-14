var mongodb = require("mongodb").MongoClient;
var express = require("express");
var eventRouter = express.Router();




eventRouter.route("/") //https://mean-stack-frankc60.c9users.io/Events/
    .get(function(req,res) {
        var url = "mongodb://localhost:27017/eventsApp";
        mongodb.connect(url, function(err, db) {
            var collection = db.collection("events");
            collection.find({}).toArray(function(err, results) {
                res.render("events", {  
                    list: ["aa val", "bb value", "3rd value"],
                    nav: [
                        {Link: "Services", Text: "Services"}, 
                        {Link: "Portfolio", Text: "Portfolio"}, 
                        {Link: "About", Text: "About"}, 
                        {Link: "Team", Text: "Team"}, 
                        {Link: "Contact", Text: "Contact"}, 
                        {Link: "Events", Text: "Events"}
                    ],
                    events: results
                });  
            })
           
        });
        
      
    });
    
  
eventRouter.route("/:id") //https://mean-stack-frankc60.c9users.io/Events/event
    .get(function(req,res) {
        var id = req.params.id;
       // res.send("Hello single event!! id:" + id); 
        res.render("event", {  
            list: ["aa val", "bb value", "3rd value"],
            nav: [
                {Link: "Services", Text: "Services"}, 
                {Link: "Portfolio", Text: "Portfolio"}, 
                {Link: "About", Text: "About"}, 
                {Link: "Team", Text: "Team"}, 
                {Link: "Contact", Text: "Contact"}, 
                {Link: "Events", Text: "Events"}
            ],
            events: eventsData[id]
        });
       
    });

    
    

module.exports = eventRouter;