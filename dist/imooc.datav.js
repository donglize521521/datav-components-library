(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('sam-test-data')) :
	typeof define === 'function' && define.amd ? define(['sam-test-data'], factory) :
	(global = global || self, global.imoocDatav = factory(global.samTestData));
}(this, (function (samTestData) { 'use strict';

	console.log(samTestData.random(100));

	return samTestData.random;

})));
