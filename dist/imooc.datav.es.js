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

export default index;
