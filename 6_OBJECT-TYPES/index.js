"use strict";
function showProducDetails(product) {
    console.log(`O nome é ${product.name} e seu preço é de R$${product.price}`);
    if (product.isAvailable == true) {
        console.log(`O produto ${product.name} está disponivel, aproveite a queima de estoques`);
    }
    else {
        console.log(`O produto ${product.name} não está disponivel, que pena 😔`);
    }
}
const ps5 = {
    name: "Playstatio 5",
    price: 5600.00,
    isAvailable: false
};
const iphone16pm = {
    name: "iphone 16 Pro Max",
    price: 12600.00,
    isAvailable: true
};
showProducDetails(ps5);
showProducDetails(iphone16pm);
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const adm = {
    email: "felipemarques@gmail.com",
    role: "Admin"
};
const usuario = {
    email: "usuariocomum@gmail.com"
};
showUserDetails(adm);
showUserDetails(usuario);
const fusca = {
    brand: "Volksvagen",
    wheels: 4
};
console.log(fusca);
let coords = {
    X: 10
};
coords.y = 15;
console.log(coords);
const pedro = {
    name: "Pedro",
    age: 18
};
const Szpak = {
    name: "SZPAK",
    age: 18,
    superpowers: ["Invisibilidade", "Parar o tempo", "Super-Força"]
};
console.log(pedro);
console.log(Szpak);
