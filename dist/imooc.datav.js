(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.imoocDatav = factory());
}(this, (function () { 'use strict';

  var a = 1;

  var name = "datav-components-library";
  var version = "1.0.0";
  var description = "A datav components library";
  var main = "index.js";
  var scripts = {
  	dev: "rollup -wc rollup.config.dev.js",
  	build: "rollup -c rollup.config.dev.js"
  };
  var repository = {
  	type: "git",
  	url: "git+https://github.com/donglize521521/datav-components-library.git"
  };
  var keywords = [
  ];
  var author = "donglize <1486252015@qq.com>";
  var license = "ISC";
  var bugs = {
  	url: "https://github.com/donglize521521/datav-components-library/issues"
  };
  var homepage = "https://github.com/donglize521521/datav-components-library#readme";
  var devDependencies = {
  	"@babel/preset-env": "^7.20.2",
  	rollup: "^2.16.1",
  	"rollup-plugin-babel": "^4.4.0",
  	"rollup-plugin-commonjs": "^10.1.0",
  	"rollup-plugin-json": "^4.0.0",
  	"rollup-plugin-node-resolve": "^5.2.0"
  };
  var dependencies = {
  	"@babel/core": "^7.21.0",
  	"sam-test-data": "0.0.5"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	repository: repository,
  	keywords: keywords,
  	author: author,
  	license: license,
  	bugs: bugs,
  	homepage: homepage,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  console.log(pkg);
  console.log(a);
  var c = function c() {
    return 3;
  };

  return c;

})));
