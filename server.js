'use strict';
const express = require('express');
const querystring = require('querystring');
const data_handler = require('./operations/data_handler.js')
const HOST = '0.0.0.0';
const PORT = 8080;
const app = express();

app.get('/', (request, response) => {
	response.sendFile(__dirname + "/public/" + "index.html");
});

app.post('/add', (request, response) => {
	console.log('Received add request');
	const requestBody = [];
	
	request.on('data', (chunks) => {
		requestBody.push(chunks);
	});

	request.on('end', () => {
		data_handler.data.add_data(querystring.parse(Buffer.concat(requestBody).toString()))
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
