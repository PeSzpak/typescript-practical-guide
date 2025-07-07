//Var let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b = 10) {
    let a = 5
    console.log(b)
}

console.log(a)

function logName() {
    const name = "Isabelle"
    console.log(name)
}
const name = "Pedro"

logName()
console.log(name)

//Arrow function 
const sum = function sum(a, b) {
    return a + b 
}

const arrowSum = (a, b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name) {
        return 'Olá ' + name + '!'
    }else {
        return 'Olá'
    }
}

console.log(greeting("Pedro"))
console.log(greeting())


const testeArrow = () => console.log('testou')
testeArrow()

const user = {
name: "Ayrton",
sayUrseName() {
    var self = this
    setTimeout(function() {
        console.log(self)
        console.log("Username " + self.name)
    }, 500)
},
sayUserNameArrow() {
    setTimeout(() => {
        console.log("Username " + this.name)
    },1000)
}
}
user.sayUrseName()

//filter 
const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n 
    }
})

console.log(highNumbers)

const users = [
    {name: 'matheus', available: false},
    {name: 'Junior', available: false},
    {name: 'Pedro', available: true},
    {name: 'Thiago', available: true}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)
console.log(availableUsers)
console.log(notAvailableUsers)

//Map 
const products = [
    {name: "Camiseta Lacoste", price: 899.89 , category: "roupas"},
    {name: "Calça de Alfaiataria Ysl", price: 5900, category: "roupas"},
    {name: "Perfume Creed Aventus", price: 2900 , category: "perfume"},   
    {name: "Bolsa hermès", price:500000 , category: "bolsas"},
]

products.map((product) => {
    if(product.category === 'roupas') {
        product.onSale = true
    }
})
console.log(products)

//template literals 
const userName = 'matheus'
const age = 30

console.log(`O nome do usuario é ${userName} e ele tem ${age} anos.`)
console.log('O nome do usuario é ' + userName + 'e ele tem ' + age + ' anos.')

//destructuring 
const fruits = ["pitaya", "maracujá", "melancia"]

const [f1, f2, f3] = fruits

console.log(fruits)
console.log(f1)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "black" 
}

const  {name: productName, price , category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)

//spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log (a4)

const carName = {name: "Gol"}
const carBrand = {brand: "Vw"}
const carInfo = {km: 100000, price: 49000 }

const car = {...carName, ...carBrand, ...carInfo}
const car2 = {...carName, ...carBrand, ...carInfo, wheels: 4}
console.log(car)
console.log(car2)

//classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const camisa = new Product("Camiseta", 100)

console.log(camisa.name)
console.log(camisa.productWithDiscount(10))
console.log(camisa.productWithDiscount(50))

//Herança 
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("chapéu de palha", 29.88, ["Azul", "Vermelho", "Marrom", "Cinza", "Bege"])
console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()
