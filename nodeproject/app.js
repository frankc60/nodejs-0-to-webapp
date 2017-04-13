var express = require("express");
var app = express();

var port = process.env.PORT; //needed by cloud9

var eventRouter = express.Router();

app.use(express.static("public"));
//eg. https://mean-stack-frankc60.c9users.io/css/agency.css

app.use(express.static("bower_components"));
//bower components now available

app.set("views", "./src/views");
app.set("view engine", "ejs");

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

eventRouter.route("/event") //https://mean-stack-frankc60.c9users.io/Events/event
    .get(function(req,res) {
        res.send("Hello single event!!"); 
    });



app.use("/Events", eventRouter);

//routing example
app.get("/", function(req, res) {
   // res.send("hi Frank!");
    res.render("index", {  
        list: ["first val", "sec value", "3rd value"],
        nav: [
            {Link: "Services", Text: "Services"}, 
            {Link: "Portfolio", Text: "Portfolio"}, 
            {Link: "About", Text: "About"}, 
            {Link: "Team", Text: "Team"}, 
            {Link: "Contact", Text: "Contact"}, 
            {Link: "Events", Text: "Events"}
        ]
    });
});


app.listen(port, function(err) {
   console.log("the server is running on port " + port); 
});