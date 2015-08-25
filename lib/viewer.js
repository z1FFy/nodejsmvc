/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */

require ('./core.js');

function view(pathname) {
	fs = require('fs');
	res.view='none';

	var filename = pathname;
	if (res.splitPath[2]) {
		filename = '/'+res.splitPath[2];
	}
	var path = './modules'+pathname+'/views'+filename+'.html';
	var buf = fs.readFileSync(path, "utf8");
	res.view = buf;
}
//SimpleNJFW
exports.view = view;