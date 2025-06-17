"use strict";
//type guard
function Sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Invalid arguments: both arguments must be either numbers or strings that can be converted to numbers.");
    }
}
Sum(1, 2);
Sum("55", "55");
console.log(Sum(1, 2));
console.log(Sum("1", 2));
//checking the type 
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 60], 'sum');
operations([1, 2, 60], 'multiply');
//instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const pedro = new User("Pedro");
const Szpak = new SuperUser("SZPAK");
console.log(pedro);
console.log(Szpak);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(pedro);
userGreeting(Szpak);
