var fs = require('fs');

file = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
	var lines = data.split('\n').length -1;
	console.log(lines);
});

