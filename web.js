var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

buffer = fs.readFileSync("index.html");

str = buffer.toString();

app.use('/css',express.static(__dirname + '/bootstrap/css/'));
app.use('/css',express.static(__dirname + '/font-awesome/css/'));
app.use('/css',express.static(__dirname + '/bootstrap-social-buttons/css/'));

app.use('/js',express.static(__dirname + '/bootstrap/js/'));
app.use('/js',express.static(__dirname + '/jquery/js/'));

app.get('/', function(request, response) {
  response.send(str);
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
