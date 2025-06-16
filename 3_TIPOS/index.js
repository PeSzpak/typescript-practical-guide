"use strict";
// Arrays 
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);
let names = ["Pedro", "Henrique"];
names.push("Szpak");
console.log(names);
//outra sintaxe de array 
let names2 = ["Isabelle", "Santos", "da", "Cruz"];
names2.push("Szpak");
console.log(names2);
//any
const arr1 = [1, "Isabelle", true, [], { nome: "Szpak" }];
console.log(arr1);
arr1.push(['eu', 'amo', 'minha', 'namorada']);
console.log(arr1);
//parametros tipados 
function soma(a, b) {
    console.log(a + b);
}
soma(10, 5);
//retorno tipado
function greeting(nome) {
    return `Olá ${nome}`;
}
console.log(greeting("Ana"));
//função anonima
setTimeout(function () {
    const sallary = 1000;
    const bonus = 200;
    console.log(sallary + bonus);
}, 2000);
// tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}
const objCoord = { x: 329, y: 84 };
passCoordinates(objCoord);
//propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    if (b) {
        console.log("B: " + b);
    }
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, undefined, 3);
showNumbers(1, 2, 3);
showNumbers(4);
// validação de argumentos opcionais
function showNumbers2(P, S, G) {
    if (S === undefined && G === undefined) {
        console.log("P: " + P);
    }
    else if (S === undefined) {
        console.log("P: " + P);
        console.log("S: " + S);
    }
    else {
        console.log("P: " + P);
        console.log("S: " + S);
        console.log("G: " + G);
    }
}
showNumbers2(1, 3);
showNumbers2(1, 2, 3);
showNumbers2(4);
//unioon types
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(100);
showBalance("quinhentos");
const arr2 = [1000, "Szpak"];
console.log(arr2);
// union types avançado
function showUserID(id) {
    if (typeof id === "number") {
        return `o id do usuário é: ${id}`;
    }
    return `usuário invalido`;
}
console.log(showUserID(4));
console.log(showUserID("EusouADM"));
