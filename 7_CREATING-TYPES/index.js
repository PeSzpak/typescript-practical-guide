"use strict";
//generic = aceita qlqr tipo porem retorna oq eu mandar, no caso a string.
function showdata(arg) {
    return `O dado é: ${arg}`;
}
console.log(showdata("i need help"));
console.log(showdata(41));
console.log(showdata(true));
//Generics X Contraints
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Ratinho", Is: "Apresentados ou Animal?" };
console.log(showProductName(myObj));
