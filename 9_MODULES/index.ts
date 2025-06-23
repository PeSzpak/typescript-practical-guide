//file import 
//rode do node NOMEDOARQUIVO.js 
import importGreet from "./greet";

importGreet()

//multiple import
import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)
myFunction()

//alias
import {someName as name} from "./changename"
console.log(name)
