var express = require('express');
var app = express();
 
var core = require('./core');
app.use('/api/', core);
 
var server = app.listen(8000, function() {
    console.log('Listening on port http://localhost:8000/api...');
});
