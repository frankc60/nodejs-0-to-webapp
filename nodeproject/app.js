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

eventRouter.route("/") //https://mean-stack-frankc60.c9users.io/Events
    .get(function(req,res) {
        res.send("Hello Events"); 
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