var posts = require("./posts");

var express = require('express');
var bodyParser = require("body-parser");



module.exports = function(app){
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get("/", function(req, res) {
        app.db.collection("Blog").find().toArray(function(err, res){
            res.render("index.html", {"articles" : res});
        })

        
    });

    app.post("/", function(req, res){
        var article = {"Auteur" : req.body.author, "Titre" : req.body.title , "Contenu" : req.body.content};
        console.log(article);
        app.db.collection("Blog").insert(article);

        app.db.collection("Blog").find().toArray(function(err, res){
            res.render("index.html", {"articles" : res});
        })
    })

    //register posts endpoint
    posts(app);
}