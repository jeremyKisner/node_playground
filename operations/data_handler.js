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
			if (err) {
				throw err;
			}
			console.log('Data written to file');
		});
	},

	get_data: function() {
		console.log('Getting data');
		return fs.readFileSync(db_file, 'utf8');
	},

	update_data: function(data_to_update) {
		console.log("Updating data");
		let data = JSON.parse(operations.get_data());
		for (var i = 0; i < data.length; i++) {
			console.log(data[1]);
		}
	},

	delete_by_id: function(id) {
		console.log("Deleting data");
		let data = JSON.parse(operations.get_data());
		for (var i = 0; i < data.length; i++) {
			console.log(id["id"]);
			console.log(data[i]["id"]);
			if (id["id"] === data[i]["id"]) {
				console.log('deleting');
				data.splice(data[i], 1);
			}
		}	
		console.log(data);
		fs.writeFile(db_file, JSON.stringify(data, null, 4), (err) => {
			if (err) {
				throw err;
			}
			console.log('Data written to file');
		});
	}
}

exports.data = operations;