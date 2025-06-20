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
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do Post é: ${this.title} `;
    }
}
const myPost = new blogPost("O uso de Cigarro eletronico aumenta e muito no Brasil");
console.log(myPost.itemTitle());
//method override 
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
//===========================================VISIBILIDADE===========================================\\
//Public 
class C {
    constructor() {
        this.x = 2024;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//Protected
class E {
    constructor() {
        this.x = 15.08;
    }
    protectedMethod() {
        console.log("Este é um metodo protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//Private 
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privaod");
    }
    showPrivateMethod() {
        this.privateMethod;
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name)
console.log(pObj.showName());
//console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//     myMethod() {
//         this.privateMethod()
//     }
// }
//Static Members 
class StaticMembers {
    static staticMethod() {
        console.log("Este é um metodo estatico");
    }
}
StaticMembers.prop = "Teste Gratis";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//Generic Class 
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("Caixa de", "Surpresa");
const newItem2 = new Item(true, 12);
const newItem3 = new Item(false, "AHAHAHAH");
console.log(newItem);
console.log(newItem2);
console.log(newItem3);
console.log(typeof newItem2.first);
//Parameters Properties 
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showprice() {
        return `O preço total: ${this.price}`;
    }
}
const newShirt = new ParametersProperties("MM camiseta", 15, 599.99);
console.log(newShirt.name);
console.log(newShirt.showprice);
console.log(newShirt.showQty);
// console.log(newShirt.price)
// console.log(newShirt.qty)
//class expressions 
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const Pessoa = new myClass("Pedrin Bala Torta");
console.log(Pessoa);
console.log(Pessoa.name);
//Abstract Class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Maciel");
newAbstractObject.showName();
