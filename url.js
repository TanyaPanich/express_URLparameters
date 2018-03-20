'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});
app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});
//go to http://localhost:3000/hi?name=Nina
app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
