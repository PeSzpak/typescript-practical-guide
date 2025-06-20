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
const myCar = { name: "URUS", brand: "Lanborghini", transmission: "Manual", color: "Midnight Blue " };
const myPen = { name: "Caneta Bic multicolor", brand: false, transmission: false, color: "multicolor" };
console.log(myCar);
console.log(myPen);
//type parameters 
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Ayrton Senna",
    age: 27,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'name'));
//typeof type operator 
const userName = "Pedro";
const userName2 = "Szpak";
const userName3 = "Ayrton Senna";
const qlqrcoisa = "MEuDeus FUnciona";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veiculo possui ${km} kilometros`);
}
showKm(newTruck.km);
