//type guard
function Sum(a: string | number, b: string | number) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
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
function operations(arr: number[], operation: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Por favor, defina uma operação");
    }
}

operations([1, 2, 60], 'sum');
operations([1, 2, 60], 'multiply');

//instance of
class User {
    name;

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)

    }
}

const pedro = new User("Pedro");
const Szpak = new SuperUser("SZPAK");

console.log(pedro);
console.log(Szpak);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(pedro);
userGreeting(Szpak);


//In operator 
class R6Operator {
    name;
    mainGun;
    mainGadget;
    side;
    type;
    favoriteMap;

    constructor(name: string, mainGun: string, mainGadget: string, side: boolean, type?: string, favoriteMap?: string) {
        this.name = name;
        this.mainGun = mainGun;
        this.mainGadget = mainGadget;
        this.side = side;
        if (type) {
            this.type = type;
        }
        if (favoriteMap) {
            this.favoriteMap = favoriteMap;
        }
    }
}

const thermite = new R6Operator("Thermite","556xi" , "Exothermic Charge", true, "Hard Breach", "Chalet" )
const Vigil = new R6Operator("Vigil","K1A" , "ERC-7", false)

function showOperator(operator: R6Operator) {
    if (operator.type !== undefined) {
        console.log(`O operador é da classe ${operator.type}`);
    } else {
        console.log(`${operator.name} não possui tipo definido`);
    }

    if (operator.favoriteMap !== undefined) {
        console.log(`O mapa favorito do(a) ${operator.name} é ${operator.favoriteMap}`);
    } else {
        console.log(`${operator.name} não tem mapa favorito definido`);
    }
}

showOperator(thermite);
showOperator(Vigil);
console.log(thermite);
console.log(Vigil);
