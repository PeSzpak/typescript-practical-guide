// Arrays 
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);

let names: string[] = ["Pedro", "Henrique"];
names.push("Szpak");
console.log(names);

//outra sintaxe de array 
let names2: Array<string> = ["Isabelle", "Santos", "da", "Cruz"];
names2.push("Szpak");
console.log(names2);

//any
const arr1: any = [1, "Isabelle", true, [], { nome: "Szpak" }];
console.log(arr1)

arr1.push(['eu', 'amo', 'minha', 'namorada'])
console.log(arr1);

//parametros tipados 
function soma(a: number, b: number) {
    console.log(a + b);
}
soma(10, 5);

//retorno tipado
function greeting(nome: string): string {
    return `Olá ${nome}`;
}
console.log(greeting("Ana"));

//função anonima
setTimeout(function () {

    const sallary: number = 1000;
    const bonus: number = 200;
    console.log(sallary + bonus);

}, 2000)

// tipos de objetos
function passCoordinates(coord: { x: number, y: number }) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}
const objCoord = { x: 329, y: 84 };
passCoordinates(objCoord)

//propriedades opcionais
function showNumbers(a: number, b?: number, c?: number) {
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
function showNumbers2(P: number, S?: number, G?: number) {
    if (S === undefined && G === undefined) {
        console.log("P: " + P);
    } else if (S === undefined) {
        console.log("P: " + P);
        console.log("S: " + S);
    } else {
        console.log("P: " + P);
        console.log("S: " + S);
        console.log("G: " + G);
    }
}
showNumbers2(1, 3);
showNumbers2(1, 2, 3);
showNumbers2(4);

//unioon types
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`)
}
showBalance(100);
showBalance("quinhentos");

const arr2: Array<string | number> = [1000, "Szpak"];
console.log(arr2);

// union types avançado
function showUserID(id: string | number) {
    if (typeof id === "number") {
        return `o id do usuário é: ${id}`
    }
    return `usuário invalido`;
}

console.log(showUserID(4));
console.log(showUserID("EusouADM"))

//type alias 
type ID = string | number;

function showId(id: ID) {
    console.log(`O id é: ${id}`);
}
showId(4);
showId("Eu o dono")

//interfaces
interface Point {
    x: number;
    y: number;
    z: number;
}
function showCoordinates(coord: Point) {
    console.log(`X: ${coord.x}`);
    console.log(`Y: ${coord.y}`);
    console.log(`Z: ${coord.z}`);
}
const coordObj: Point = { x: 10, y: 20, z: 30 };
showCoordinates(coordObj);

// interface x type alias
interface Person {
    name: string;
}
interface Person {
    age: number;
}
const somePerson: Person = {
    name: "Isabelle",
    age: 18
};

//literal types
let test: "testando"
test = "testando";
console.log(test);

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
showDirection("right");
//showDirection("top"); //erro, pois "top" não é um valor permitido

//Non-null assertion operator
const p = document.getElementById("some-p")!;

console.log(p.innerText);

//bigint
let n: bigint;
n = 1000n
console.log(n);
n = BigInt(9007199254740991);
console.log(n);

//symbol
let symbolA: symbol = Symbol("PEDRO");
let symbolB: symbol = Symbol("PEDRO");
console.log(symbolA === symbolB); // false, pois são símbolos únicos
console.log(symbolA == symbolB); // false, pois são símbolos únicos
console.log(symbolA.description); // "PEDRO"

