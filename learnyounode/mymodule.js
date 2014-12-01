var fs = require('fs');
var path = require('path');

exports.printFilesByExtension = function (file_path, extension) {
	fs.readdir(file_path, function(err, files) {
		if (err)
			return console.log("An error occured:", err);

		files.forEach(function(file) {
			if ('.' + extension == path.extname(file))
				console.log(file);
		});
	});
}




