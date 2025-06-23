//example decorator  
function myDecorator() {
    console.log("iniciando decorator!")

    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}
class myClass {
    @myDecorator()
    testing() {
        console.log("Terminando execução do metodo ")
    }
}

const myObj = new myClass()

myObj.testing()

//multiple decorators 
function a() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {

        console.log("executou a.")
    }
}
function b() {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {

        console.log("executou b.")
    }
}
class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log("terminando execução")
    }
}

const multiple = new MultipleDecorators()
multiple.testing

//class Decorator
function classDec(constructor: Function) {
    console.log(constructor.name)
    if (constructor.name === "User") {
        console.log("Criando Usuario")
    }
}
@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const Pedro = new User("Pedrinho")

//Method Decorator 
function playable(value: boolean) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}
class R6Map {
    name
    constructor(name: string) {
        this.name = name
    }
    @playable(false)
    showName() {
        console.log(this)
        return `O nome do mapa é: ${this.name}`
    }
}

const Litoral = new R6Map("Litoral")
console.log(Litoral.showName())

//Acessor Decorator 
class Player {
    name?
    main?
    age?
    constructor(name?: string, main?: string, age?: number) {
        this.name = name
        this.main = main
        this.age = age
    }
    @playable(true)
    get showName() {
        return `Nome do ProPlayer é: ${this.name}`
    }
    @playable(false)
    get showMain() {
        return `O ${this.name} joga de ${this.main} como main Operator`
    }
}

const nesk = new Player("Nesk", "Dokkaebi", 33)
console.log(nesk.showName)
console.log(nesk.showMain)

//Property Class
function formatNumber() {
    return function (
        target: any,
        propertKey: string
    ) {
        let value: string;

        const getter = function () {
            return value;
        }
        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0");
        }
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    }
}
class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}
const newItem = new ID("1")
console.log(newItem)
console.log(newItem.id)

//Class Decorator Real Example 
function createDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createDate
class Book {
    id
    createdAt?: Date
    constructor(id: number) {
        this.id = id
    }
}

@createDate
class Pen {
    id
    createdAt?: Date
    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(newBook.createdAt)
console.log(pen)

//method decorator Real example 
function checkIfUserPosted() {

    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        console.log(childFunction)
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("Usuario ja Postou!")
                return null
            } else {
                return childFunction.apply(this, args)
            }
            return descriptor
        }
    }
}

class Post {
    alreadyposted = false

    @checkIfUserPosted()
    post(content: string, alreadyposted: boolean) {
        this.alreadyposted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()
newPost.post("Meu primeiro post!", newPost.alreadyposted)

newPost.post("Meu segundo post!", newPost.alreadyposted)

newPost.post("Meu terceiro post!", newPost.alreadyposted)

//Property decorator real example 
function Max(limit: number){
    
    return function(target: Object, propertyKey: string) {

    let value: string
    
    const getter = function() {
        return value
    }
    const setter = function(newVal: string) {
        if(newVal.length > limit) {
            console.log(`O valor deve ter no maximo ${limit} digitos.`)
            return
        }else 
        {
            value = newVal
        }
    }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter 
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}

let pedro = new Admin ("PedroAdm")
let Anna = new Admin ("anna")
console.log(Anna)