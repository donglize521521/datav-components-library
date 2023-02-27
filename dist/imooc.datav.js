(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.imoocDatav = factory());
}(this, (function () { 'use strict';

  function random(){
    console.log('random');
  }

  console.log(random);

  return random;

})));
