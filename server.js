var net = require('net')

var server = net.createServer(function(connection) {
	console.log('Client connected');

	connection.on('end', function() {
		console.log('client disconnected');
	});

	connection.write('Hello world');
	connection.pipe(connection);
});

server.listen(8080, function(){
	console.log('server is listening')
});