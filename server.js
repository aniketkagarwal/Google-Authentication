var port = process.env.PORT || 3000;
var express = require("express");
var ejs = require('ejs');
var request = require('request');
var url = require('url');
var app = express();

app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {title: 'Home'});
});
 
app.listen(port, function() {
 console.log("Server listening on port " + port);
});
