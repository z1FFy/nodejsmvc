/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */

function view(pathname) {
	fs = require('fs');
	res.view='none';
	var filename = pathname;
	if (res.splitPath[2]) {
		filename = '/'+res.splitPath[2];
	}
	var path = './modules'+pathname+'/views'+filename+'.html';
	console.log(res.data);
	var buf = '<script>JSON.stringify('+res.data+')</script>';
	buf = buf + fs.readFileSync(path, "utf8");
	console.log(buf);
	res.view = buf;
}
//SimpleNJFW
exports.view = view;