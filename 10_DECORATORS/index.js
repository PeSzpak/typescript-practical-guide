"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//example decorator  
function myDecorator() {
    console.log("iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do metodo ");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//multiple decorators 
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou a.");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou b.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("terminando execução");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing;
//class Decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando Usuario");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const Pedro = new User("Pedrinho");
//Method Decorator 
function playable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class R6Map {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome do mapa é: ${this.name}`;
    }
}
__decorate([
    playable(false)
], R6Map.prototype, "showName", null);
const Litoral = new R6Map("Litoral");
console.log(Litoral.showName());
//Acessor Decorator 
class Player {
    constructor(name, main, age) {
        this.name = name;
        this.main = main;
        this.age = age;
    }
    get showName() {
        return `Nome do ProPlayer é: ${this.name}`;
    }
    get showMain() {
        return `O ${this.name} joga de ${this.main} como main Operator`;
    }
}
__decorate([
    playable(true)
], Player.prototype, "showName", null);
__decorate([
    playable(false)
], Player.prototype, "showMain", null);
const nesk = new Player("Nesk", "Dokkaebi", 33);
console.log(nesk.showName);
console.log(nesk.showMain);
