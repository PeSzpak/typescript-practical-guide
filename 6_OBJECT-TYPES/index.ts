//object type for interface function 
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

function showProducDetails(product: Product) {
    console.log(`O nome é ${product.name} e seu preço é de R$${product.price}`)
    if(product.isAvailable == true){
        console.log(`O produto ${product.name} está disponivel, aproveite a queima de estoques`)
    }else {
        console.log(`O produto ${product.name} não está disponivel, que pena 😔`)
    }
}
const ps5: Product = {
    name: "Playstatio 5",
    price: 5600.00,
    isAvailable: false
}
const iphone16pm: Product = {
    name: "iphone 16 Pro Max",
    price: 12600.00,
    isAvailable: true
}

showProducDetails(ps5)
showProducDetails(iphone16pm)

//interface w/ optional propert
interface User {
    email:string,
    role?:string;
}

 function showUserDetails(user: User){
    console.log(`O usuario tem o e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuario é ${user.role}`)
    }

 }


 const adm: User = {
    email: "felipemarques@gmail.com",
    role: "Admin"
}
const usuario: User = {
    email: "usuariocomum@gmail.com"
}
showUserDetails(adm)
showUserDetails(usuario)

//readonly 
interface Car {
    brand : string;
    readonly wheels: number
}
const fusca: Car = {
    brand: "Volksvagen",
    wheels: 4

}
console.log(fusca)

//