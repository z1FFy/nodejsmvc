/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */

require("./lib/conf.js");

var server = require("./lib/server");
var router = require("./lib/router");


server.start(router.route);