/*
init needs:
file location
read file in memory

get all file entries
put new file entry
delete file entry
update file entry

*/
var fs = require('fs');

var operations = {
	add_data: function(data) {
		console.log(data);
	}
}

exports.data = operations;