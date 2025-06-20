"use strict";
//Class property 
class User {
}
const Pak = new User();
console.log(Pak);
Pak.name = "Pedo Szpak";
console.log(Pak);
// Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Pedro = new NewUser("Pedro Szpak", 18);
console.log(Pedro);
//Readonly 
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const taos = new Car("Taos");
console.log(taos);
console.log(taos.wheels);
taos.name = "Taos do meu sogro que é muito foda";
console.log(taos);
// taos.wheels = 10
// console.log(taos)
//extends and super 
class Serie {
    constructor(name) {
        this.name = name;
    }
}
const st = new Serie("Stranger Things");
class Infos extends Serie {
    constructor(name, seasons, bestCharacter, mainCharacter, kind) {
        super(name);
        this.seasons = seasons,
            this.bestCharacter = bestCharacter,
            this.mainCharacters = mainCharacter,
            this.kind = kind;
    }
}
const RM = new Infos("Rick and Morty", 7, "Mr.PoopPants", "Rick an Morty", "Adult Swin");
console.log(RM);
//methods 
class Barbarian {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const Marquito = new Barbarian("Marquito o Grandinho");
console.log(Marquito.name);
Marquito.greeting();
//This 
class LuxuryCar {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    sayCarInfo() {
        console.log(`O seu carro de Luxo é um ${this.name}, da marca ${this.brand} e atualmente custa a bagatela de R$${this.price}`);
    }
}
const A5 = new LuxuryCar("A5", "Audi", 180000);
console.log(A5);
A5.sayCarInfo();
//getters 
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + " " + this.surname;
    }
}
const PS = new Person("Pedro", "Szpak");
console.log(PS.name);
console.log(PS.fullname);
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 3;
myCoords.filly = 0; // n retorna nada devido a minha validação 
myCoords.filly = 6;
console.log(myCoords);
