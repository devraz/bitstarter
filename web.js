var express = require('express');

var app = express.createServer(express.logger());

buffer = fs.readFileSync("index.html");

str = buffer.toString();
str = "test";

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
