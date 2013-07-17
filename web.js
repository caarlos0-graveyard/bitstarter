var express = require('express')
  , fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // async is always better
  fs.readFile('index.html', function (err, text) {
    response.setHeader('Content-Type', 'text/html');
    response.end(text);
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
