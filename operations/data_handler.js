/*
get all file entries
put new file entry
delete file entry
update file entry
*/

var fs = require('fs');
var db_file = './data/data.json';

var operations = {

	add_data: function(data_to_add) {
		let data = JSON.parse(operations.get_data());
		data.push(data_to_add);
		fs.writeFile(db_file, JSON.stringify(data, null, 4), (err) => {
			if (err) throw err;
			console.log('Data written to file');
		});

	},
	get_data: function() {
		console.log('Getting data');
		return fs.readFileSync(db_file, 'utf8');
	}
}

exports.data = operations;