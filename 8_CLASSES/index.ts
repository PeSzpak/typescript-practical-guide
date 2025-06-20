  //Class property 
  class User {
    name!: string
    age!: number
  }

  const Pak = new User()

  console.log(Pak)

  Pak.name = "Pedo Szpak";

  console.log (Pak)

  // Constructor
  class NewUser {
    name
    age 

    constructor(name: string, age:number){
    this.name = name
    this.age = age
} 
  }

  const Pedro = new NewUser("Pedro Szpak", 18)
  console.log(Pedro)

//Readonly 
class Car {
    name
    readonly wheels = 4 
    constructor(name: string) {
        this.name = name
    }
}
const taos = new Car("Taos")
console.log(taos)

console.log(taos.wheels)

taos.name = "Taos do meu sogro que é muito foda"
console.log(taos)

// taos.wheels = 10
// console.log(taos)

//extends and super 
class Serie {
    name

    constructor(name: string){
    this.name = name
}
}

const st = new Serie("Stranger Things")

class Infos extends Serie {
    seasons
    bestCharacter
    mainCharacters
    kind

    constructor(name:string, seasons: number, bestCharacter:string, mainCharacter:string, kind: String ) {
        super(name)
        this.seasons = seasons,
        this.bestCharacter = bestCharacter,
        this.mainCharacters = mainCharacter,
        this.kind = kind
    }
}

const RM = new Infos(
    "Rick and Morty", 
    7,
    "Mr.PoopPants",
    "Rick an Morty",
    "Adult Swin"
)
console.log(RM)

//methods 
class Barbarian {
    name

    constructor(name:string){
        this.name = name
    }

    greeting(){
        console.log("Hey Stranger!")
    }
}

const Marquito = new Barbarian ("Marquito o Grandinho")
console.log(Marquito.name)
Marquito.greeting()

//This 
class LuxuryCar {
    name
    brand
    price

    constructor(name:string, brand:string, price:number){
        this.name = name
        this.brand = brand
        this.price = price
    }

     sayCarInfo() {
        console.log(`O seu carro de Luxo é um ${this.name}, da marca ${this.brand} e atualmente custa a bagatela de R$${this.price}`)
    }
}
const A5 = new LuxuryCar("A5", "Audi", 180000)
console.log(A5)
A5.sayCarInfo()

//getters 
class Person {
    name 
    surname 

    constructor(name:string, surname:string){
        this.name = name
        this.surname = surname
    }

    get fullname(){
        return this.name+ " " + this.surname
    }
}

const PS = new Person("Pedro", "Szpak")

console.log(PS.name)
console.log(PS.fullname)

class Coords {
    x!: number
    y!: number

    set fillx(x: number) {
        if(x === 0 ){
            return
        }
        this.x = x 
        console.log("X inserido com sucesso")
    }
    set filly(y: number) {
        if(y === 0 ){
            return
        }
        this.y = y 
        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillx = 3
myCoords.filly = 0 // n retorna nada devido a minha validação 
myCoords.filly = 6

console.log(myCoords)

//Class x Interface 
interface showTitle {
    itemTitle():string

}
class blogPost implements showTitle {
    title

    constructor(title:string){
    this.title = title
    }
    itemTitle() {
        return `O titulo do Post é: ${this.title} `
    }
}
const myPost = new blogPost("O uso de Cigarro eletronico aumenta e muito no Brasil")
console.log(myPost.itemTitle())

//method override 
class Base {
    someMethod(){
        console.log("Alguma coisa")
    }
}
class Nova extends Base {
someMethod(): void {
    console.log("Testando outra coisa")
}
}
const myObject  = new Nova ()
myObject.someMethod()


//===========================================VISIBILIDADE===========================================\\
//Public 
class C {
    public x = 2024 
}

class D extends C {

}

const cInstance = new C()
console.log(cInstance.x)

const dInstance = new D()
console.log(dInstance.x)

//Protected
class E {
    protected x = 15.08
    protected protectedMethod(){
        console.log("Este é um metodo protegido")
    }
    
}
class F extends E {
    showX() {
        console.log("X: " + this.x)
    }
    showProtectedMethod(){
        this.protectedMethod()
    }
}
const fInstance = new F()
fInstance.showX()
fInstance.showProtectedMethod()

//Private 
class PrivateClass {
    private name = "Private"

    showName(){
        return this.name
    }

    private privateMethod() {
        console.log("Método privaod")
    }
    showPrivateMethod(){
        this.privateMethod
    }
}

const pObj = new PrivateClass()
//console.log(pObj.name)
console.log(pObj.showName())
//console.log(pObj.privateMethod())
pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass {
//     myMethod() {
//         this.privateMethod()
//     }
// }

//Static Members 
class StaticMembers {
   static prop = "Teste Gratis"
   static staticMethod() {
    console.log("Este é um metodo estatico")
   }
}
console.log(StaticMembers.prop)

StaticMembers.staticMethod()



