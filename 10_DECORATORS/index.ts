//decorator example 
function myDecorator() {
    console.log("iniciando decorator!")

    return function (target: any, propertKey: string,descriptor: PropertyDescriptor ) {
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
    return function(
        target: any, 
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        
        console.log("executou a.")
    }
}
function b() {
    return function(
        target: any, 
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        
        console.log("executou b.")
    }
}
class  MultipleDecorators {
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
    if (constructor.name === "User"){
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

const Pedro = new User ("Pedrinho")