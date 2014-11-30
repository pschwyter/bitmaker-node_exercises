var fs = require('fs');
var path = require('path');


var file = fs.readdir(process.argv[2], function(err, list) {
	var textfiles = [];
	for (i=0; i<list.length; i++) {
		if (path.extname(list[i]) == '.' + process.argv[3]) {
			console.log(list[i]);
		};
	};
});