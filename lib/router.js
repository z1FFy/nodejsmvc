/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */

require ('./core.js');
view = require ('./viewer.js');

function runModule(pathname){
	var modulePath = "../modules"+pathname+pathname;
	view.view(pathname);
	var module = require(modulePath);
	var func = eval();
	if (res.splitPath[2]) {
		console.log('2');
		func = eval('module.'+res.splitPath[2]+'(res)');
	} else {
		func = eval('module.main(res)');
	}
	var data = func;
	res.response.setHeader('content-type', 'text/html');
	res.response.write(data);
	res.response.end();
}

function runMainModule() {
	if (res.conf.mainModule!=null) {
		runModule('/'+res.conf.mainModule);
	} else {
		runError();
	}
}

function searchRunModule(){
	var finder = require('findit')("./modules/"+res.splitPath[1]);
	var path = require('path');
	finder.on('file', function (file) {
		console.log(file);
		if (path.basename(file)==res.splitPath[1]+'.js') {
			runModule('/'+res.splitPath[1]);
		}
 	});

	finder.on('error', function(err) {
		console.log(err);
		runError();
	});

}

function route(pathname,response,postData) {
	res.response = response;
	res.pathname = pathname;
	res.splitPath = res.pathname.split('/');
	res.postData = postData;
	if (pathname=='/') {
		runMainModule();
	} else {
		if (pathname!='/favicon.ico'){
			searchRunModule();
		}
	}

}

function runError(){
	res.response.setHeader('content-type', 'text/html');
	res.response.write('Error');
	res.response.end();
}

exports.route = route;