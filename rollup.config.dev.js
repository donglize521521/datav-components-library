const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
import commonjs from 'rollup-plugin-commonjs';
const babel = require('rollup-plugin-babel');
import json from 'rollup-plugin-json';
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');

const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js');
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js');


module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format:'umd',
    name:'imoocDatav',
    globals: {
      vue:'vue'
    }
  },{
    file: outputEsPath,
    format:'es'
  }],
  plugins: [
    vue(),
    resolve(),
    commonjs(),
    babel({
       exclude: 'node_moudles/**' 
    }),
    json(),
    postcss({
      plugins: []
    })
  ],
  external: ['vue']  
}