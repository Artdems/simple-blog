var posts = require("./posts");



module.exports = function(app){

    app.get("/", function(req, res) {
        app.db.collection("Blog").find().toArray(function(err, resulte){
            res.render("index.html", {"articles" : resulte});
        })

        
    });

    //register posts endpoint
    posts(app);
}