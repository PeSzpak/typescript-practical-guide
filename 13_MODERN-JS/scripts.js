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