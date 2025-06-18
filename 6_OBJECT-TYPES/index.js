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
