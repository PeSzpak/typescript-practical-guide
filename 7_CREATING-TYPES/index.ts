//generic = aceita qlqr tipo porem retorna oq eu mandar, no caso a string.
function showdata<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showdata("i need help"))
console.log(showdata(41))
console.log(showdata(true))

//Generics X Contraints
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = {name: "Ratinho", Is:"Apresentados ou Animal?"}

console.log(showProductName(myObj))