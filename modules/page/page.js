function main() {
		return res.view;
}

function welcome() {
	var data = [];
	data['head'] = 'coreJS';
	res.data = data;
	return res.view;
}

function test() {
	data = '<a href="/">Linktest</a>';
}

exports.main = main;
exports.welcome = welcome;