var express = require('express');
var core = express.Router();
var operations = require('./operations/data_handler');
 
core.use(function timeLog (req, res, next) {
  console.log('Requested URI Path : ', req.url);
  next();
});
 
core.get('/', function (req, res) {
  res.send(operations.data.get_data());
});
 
core.get('/about', function (req, res) {
  res.send('ABOUT');
});
 
module.exports = core