/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */


var http = require("http");
var os = require("os");
var url = require("url");



function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log("Request for " + pathname + " received.");
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '"+
				postDataChunk + "'.");
		});

		request.addListener("end", function() {
			route(pathname, response, postData);
		});

		request.on('error', function(err) {
			console.log(err);
		});

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;