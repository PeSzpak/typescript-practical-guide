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

//import all *
import * as myNumbers from './numbers'
console.log(myNumbers)

const nx = myNumbers.n1
console.log(nx)

myNumbers.showNumbers()

//import type 
import { Human } from "./myType";
class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age 

    }
}

const Pedro = new User ("Pedro Szpak", 18)
console.log(Pedro)