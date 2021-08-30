const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))


app.listen(3000, function() {
  console.log("The server has started");
})
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.get("/bmi", function(request, response) {
  response.sendFile(__dirname + "/bmi.html");
});
app.post("/bmi", function(request, response) {

  var height = Number(request.body.height);
  var heightsquare = height * height;
  var weight = Number(request.body.mass);

  var BMI = weight / heightsquare;
  response.send("<h1>Thanks for posting.</h1><h2>The BMI is:" + BMI + "</h2>");
});



app.post("/", function(request, response) {

  var number1 = Number(request.body.num1)
  var number2 = Number(request.body.num2)

  var result = number1 + number2;

  console.log(request.body.num1 + request.body.num2);
  response.send("<h1>Thanks for posting.</h1><h2>Addition of these two numbers are:" + result + "</h2>");
});
