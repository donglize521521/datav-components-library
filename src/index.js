import { a, b } from './cjs'
import pkg from '../package.json'

console.log(pkg)

console.log(a)

const c = () =>{
  return 3;
}

export default c