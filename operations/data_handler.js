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
var db_file = './data/data.json';

var operations = {
	add_data: function(data) {
		console.log('writing data');
		fs.writeFile(db_file, data, {flag: 'w+'}, error => {
			if (err) {
				console.error(error);
				return
			}
			console.log('received data');
			console.log(data);
		});
	},
	get_data: function() {
		console.log('Getting data');
		return fs.readFileSync(db_file, 'utf8');;
	}
}

exports.data = operations;