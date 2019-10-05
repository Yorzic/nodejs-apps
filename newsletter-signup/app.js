const express = require("express");
const bodyParser = require('body-parser');
var request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  //__dirname : It will resolve to your project folder.
});

app.post("/", function(req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/a7daed46ec",
    method: "POST",
    headers: {
      "Authorization": "yorzic de322657167017e5c27489e16b47defa-us20"
    },
    body: jsonData
  };

  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
      res.send("There was an error with signing up. Please, try again.");
    } else {
      if (response.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.post("/success", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.port || 3003, function() {
  console.log("Server running on port 3003");
});


// Mailchimp API reference
// de322657167017e5c27489e16b47defa-us20
// Mailchimp audience UID
// a7daed46ec
