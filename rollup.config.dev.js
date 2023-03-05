const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
import commonjs from 'rollup-plugin-commonjs';
const babel = require('rollup-plugin-babel');
import json from 'rollup-plugin-json'


const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js');
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js');


module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format:'umd',
    name:'imoocDatav'
  },{
    file: outputEsPath,
    format:'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
       exclude: 'node_moudles/**' 
    }),
    json()
  ],
  external: ['vue']  
}