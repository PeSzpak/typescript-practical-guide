//generic = aceita qlqr tipo porem retorna oq eu mandar, no caso a string.
function showdata<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showdata("i need help"))
console.log(showdata(41))
console.log(showdata(true))

//Generics X Contraints
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = {name: "Ratinho", Is:"Apresentados ou Animal?"}

console.log(showProductName(myObj))

//interface X generics 
interface myObject<T, U, P> {
    name: string
    brand: T
    transmission: U
    color: P
}

type Car = myObject<string, string, string> 
type Pen = myObject<boolean, boolean, string> 

const myCar:Car = {name: "URUS", brand:"Lanborghini", transmission:"Manual", color: "Midnight Blue " }
const myPen:Pen = {name: "Caneta Bic multicolor", brand: false, transmission:false, color:"multicolor"}

console.log(myCar)
console.log(myPen)

//type parameters 
function getSomeKey<T, K extends keyof T> (obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`
}
const server = {
    hd:'2TB',
    ram:'32GB'
}
console.log(getSomeKey(server, 'ram'))



