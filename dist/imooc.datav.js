(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.imoocDatav = factory());
}(this, (function () { 'use strict';

  const a = 1;
  const b = 2;
  function random(){
    console.log('random');
  }

  var plugin = {
    a,
    b,
    random
  };

  console.log(plugin.random());

  var index = plugin.random;

  return index;

})));
