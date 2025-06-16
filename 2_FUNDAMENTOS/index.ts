//number
let x: number = 10; 

console.log(x);

x = 15;
console.log(typeof x);

const y: number = 3.1454356654645;
console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3));

//string
const firstName: string = "Isabelle Santos da Cruz";
console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Szpak";

fullName = firstName + " " + lastName;
console.log(fullName);
console. log(typeof fullName);

//boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);

//inference & annotation
let b = 10; //inference
let c: number = 20; //annotation