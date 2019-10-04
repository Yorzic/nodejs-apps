const express = require("express");
const bodyParser = require('body-parser');
var request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
  //__dirname : It will resolve to your project folder.
});

app.get("/contact", function(request, response){
  response.sendFile(__dirname + "/contact.html");
});

app.get("/about", function(request, response){
  response.sendFile(__dirname + "/about.html");
});

app.get("/404", function(request, response){
  response.send("<h2>Oops! This page wasn't found on our website.</h2>");
});

app.post("/", function(req, res) {
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var amount = req.body.amount;

  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: amount
    }
  };

  request(options, function (error, response, body) {
    var data = JSON.parse(body);
    var price = data.price;
    var currentDate = data.time;

    console.log(price);
    res.send("<h1>" + crypto + " to " + fiat + "</h1><p>Price: " + fiat + " " + price + "</p><p><a href='/'>Refresh page</a><p>");
  });

});

app.listen(process.env.port || 3002, function() {
  console.log("Server started on port 3002");
});
