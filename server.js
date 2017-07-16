/**
 * Created by igor on 15.07.17.
 */

const static = require('node-static');
const file = new static.Server('./static');

require('http').createServer((req, res) => {
	req.addListener('end', function () {
		//
		// Serve files!
		//
		file.serve(req, res);
	}).resume();
}).listen(8080);
