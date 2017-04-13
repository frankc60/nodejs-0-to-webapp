var express = require("express");
var app = express();

var port = process.env.PORT; //needed by cloud9


app.use(express.static("public"));
//eg. https://mean-stack-frankc60.c9users.io/css/agency.css

app.use(express.static("src/views"));
//eg. https://mean-stack-frankc60.c9users.io/index.html

app.use(express.static("bower_components"));
//bower components now available


//routing example
app.get("/", function(req, res) {
    res.send("hi Frank!");
});

app.get("/routing", function(req, res) {
    res.send("hi routing!");
});



app.listen(port, function(err) {
   console.log("the server is running on port " + port); 
});