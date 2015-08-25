/*
 Simple NodeJs MVC Framework
 author: D.Kuschenko
 ziffyweb@gmail.com
 2015
 */

var server = require("./lib/server");
var router = require("./lib/router");

require("./lib/conf.js");
require("./lib/core.js");

server.start(router.route);