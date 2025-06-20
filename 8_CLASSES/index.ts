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