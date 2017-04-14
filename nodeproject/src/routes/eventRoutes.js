var express = require("express");

var eventRouter = express.Router();

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

eventRouter.route("/") //https://mean-stack-frankc60.c9users.io/Events/
    .get(function(req,res) {
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
            events: eventsData
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