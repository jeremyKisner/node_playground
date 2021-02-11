const { request } = require('express');
const express = require('express');
const app = express();
const operations = require('./operations/data_handler');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/get', function (req, res) {
	res.send(operations.data.get_data());
});
 
app.post('/add', function (req, res) {
	operations.data.add_data(req.body);
	res.send('Added');
});

app.put('/update', function(req, res) {
	operations.data.update_data(req.body);
	res.send('Updated');
});

app.delete('/deletebyid', function(req, res) {
	operations.data.delete_by_id(req.body);
	res.send('Deleted');
});

app.listen(8000, function() {
    console.log('Listening on port http://localhost:8000/...');
});
