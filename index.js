const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("css"))
app.set('view engine','ejs');
var items=["food","eatfood"];

app.get('/',
  function (req, res) {
    var today = new Date();
    var currentday = today.getDay();
    
var anyname={
  weekday:"long",
day:"numeric",
month:"long"}
var day=today.toLocaleDateString("en-US",anyname);
   res.render("list",{fkntoday:day,newitems:items})



  });
  app.post('/',function(req,res){
  var item=req.body.text2
  items.push(item)
    res.redirect("/");
  })


    app.listen(3000, function() {
      console.log("server live at port 3000");
    });

