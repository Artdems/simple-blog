var ObjectId = require("mongodb").ObjectID;

module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    res.render("create.html");
  });

  app.post("/post/create", function(req, res) {
    article = {"Auteur": req.body.author, "Titre": req.body.title , "Contenu": req.body.content};
        
    app.db.collection("Blog").insert(article, function(err, insertedArticle){
      res.redirect("/");
    });
  });

  app.get("/post/:id", function(req, res) {
    app.db.collection("Blog").findOne({"_id": ObjectId(req.params.id)}, function(err, result){
      if (result != null){
        res.render("article.html", {"article": result});
      } else {
        res.status(404).send("Not found Sorry :/")
      }
    });
  });

  app.get("/post/del/:id", function(req, res) {
    app.db.collection("Blog").findOne({"_id": ObjectId(req.params.id)}, function(err, result){
        if (result != null){
            app.db.collection("Blog").deleteOne(result, function(err, deletedArticle) {
              res.redirect("/")
            });
        } else {
          res.status(404).send("Not found Sorry :/")
        }
    });
});
}
