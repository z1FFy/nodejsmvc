### nodejsmvc - NodeJS Model View Controller Framework
 * easy
 * simple
 * light
 * nice 
 * code sugar 
 
###### Currently, the project is not in working order

 ### Usage
 file modules/blog/blog.js
```
 function main(res) {
	return (res.view);
}

exports.main = main;
```

file modules/blog/views/blog.html
```
<h3>blog workwflow test</h3>
```
file lib/conf.js
```
res = {
	conf : {
		mainModule : 'page'
	}
};
```
MainModule - Module which load first


```
dbg(variable);
```
This wrapper above console.log

go to localhost:3333/blog

#### this works!
