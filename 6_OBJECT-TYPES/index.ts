//object type for interface function 
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProducDetails(product: Product) {
    console.log(`O nome é ${product.name} e seu preço é de R$${product.price}`)
    if(product.isAvailable == true){
        console.log(`O produto ${product.name} está disponivel, aproveite a queima de estoques`)
    }else {
        console.log(`O produto ${product.name} não está disponivel, que pena 😔`)
    }
}
const ps5: Product = {
    name: "Playstatio 5",
    price: 5600.00,
    isAvailable: false
}
const iphone16pm: Product = {
    name: "iphone 16 Pro Max",
    price: 12600.00,
    isAvailable: true
}

showProducDetails(ps5)
showProducDetails(iphone16pm)

//interface w/ optional propert
interface User {
    email:string,
    role?:string;
}

 function showUserDetails(user: User){
    console.log(`O usuario tem o e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuario é ${user.role}`)
    }

 }


 const adm: User = {
    email: "felipemarques@gmail.com",
    role: "Admin"
}
const usuario: User = {
    email: "usuariocomum@gmail.com"
}
showUserDetails(adm)
showUserDetails(usuario)

//readonly 
interface Car {
    brand : string;
    readonly wheels: number
}
const fusca: Car = {
    brand: "Volksvagen",
    wheels: 4

}
console.log(fusca)

//index signature
interface CoordObject {
  [index: string ] : number
} 
let coords : CoordObject = {
    X : 10
}

coords.y = 15 

console.log(coords)

//Extends interfaces 
interface Human {
    name: string,
    age: number
}

interface superHuman extends Human {
    superpowers: string[];
}

const pedro: Human = {
    name: "Pedro",
    age: 18
}
const Szpak: superHuman = {
    name: "SZPAK",
    age: 18,
    superpowers: ["Invisibilidade", "Parar o tempo", "Super-Força"]
}

console.log(pedro)
console.log(Szpak)

//intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    skin: string
}

type HumanWithGun = Character & Gun 
const ace = {
    name: "Ace",
    gun: "Ak-47",
    skin: "Liquid 2025"
}
console.log(ace)

//Readonly arrau
let myArray:ReadonlyArray<string> = ["Kyan", "DJ onga", "BK", "Xamã", "MajorRD"];

 //myArray[5] = "Baco"

 console.log(myArray)

 myArray.forEach((item) => {
    console.log("MC: " + item)
 })
myArray = myArray.map((item) => {
    return`MC: ${item} `
 })
console.log(myArray)

//tuplas
type fiveNubers = [number,number,number,number,number]

const myNumberArray: fiveNubers = [4,13,14,15,9]
//const myMixedArray: fiveNubers = [4,true, "sdas", 123, 123,312]
//const myNumberArray2: fiveNubers = [4,13,14,15,9, 6]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherBirthday: nameAndAge =["Meu Aniversário", 4.01]
console.log(anotherBirthday)

//Tuplas ReadOnly
function showNames(strings: readonly  [string, string, string , string, string, string]) {
    console.log(strings)
    console.log(strings)
} 
showNames(["Hibanna","Thermite","Ash","Vigil","Ela","Melusi"])
