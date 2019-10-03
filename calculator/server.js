const express = require("express");
const bodyParser = require('body-parser');

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

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var submitType = request.body.submit;
  var result = 0;

  switch (submitType) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "total":
      result = num1 + num2;
      break;
    default:
      console.log("This action is not defined.");
  }

  response.send("Result is: " + result + ". Submit type is: " + submitType);
  console.log(request.body);
});

app.get("/bmicalculator", function(request, response){
  response.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmicalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height) / 100;
  var submitType = request.body.submit;
  var result = 0;

  switch (submitType) {
    case "calculateBMI":
      result = weight / (height * height);
      break;
    default:
      console.log("This action is not defined.");
  }

  response.send("Your BMI is: " + result);
  // response.sendFile(__dirname + "/bmi-calculator.html");
  console.log(request.body);
});

app.listen(process.env.port || 3001, function() {
  console.log("Server started on port 3001");
});
