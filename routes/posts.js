module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    res.render("create.html");
  });

  

  //app.post("/post/create", function(req, res) {
    //res.send("XXX");
  //});

  app.get("/post/:id", function(req, res) {
    res.send("XXX");
  });
}
