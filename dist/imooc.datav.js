(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.imoocDatav = factory());
}(this, (function () { 'use strict';

  function random(base) {
    if (base && base % 1 === 0) {
      return Math.floor(Math.random() * base);
    } else {
      return 0;
    }
  }

  console.log(random(100));

  return random;

})));
