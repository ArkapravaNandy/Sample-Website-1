var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.get("/", function(req, res){
    res.render("index.ejs");
})

app.get("/press", function(req, res){
    res.render("press.ejs");
})


app.listen(3000, process.env.IP, function(){
    console.log("MOVIE SERVER IS UP");
});
