//Void Function 
function withoutReturn(): void {
    console.log("Esta função não tem Retorno!")
}
withoutReturn()

//Callback Function 
function greeting(name: string) {
    return `O ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando Função!")

    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "Szpak ama Bell")
preGreeting(greeting, "Szpak é amado pela Bell")
preGreeting(greeting, "Casal Perfeito")

//Generic function 
function firstElement<T>(arr: T[]): T {
    return arr[2]
}
console.log(firstElement([4, 9, 15]))
console.log(firstElement(['aniversario namorado', 'aniversario namorada', 'aniversario do casal mais incrivel do mundo']))

function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name:'Casal: Szpak & Bell'}, {Age:10/12, classe:'Amor Puro' })
console.log(newObject)

// constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b){
        biggest = a
    }else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(4, 9))
console.log(biggestNumber('4', '9'))

// argument type 
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3,4,5,6,7,8],[12,122,444,7456,234234]))
console.log(mergeArrays<number | string>([4,4,9,9,15],['Pedro',' Szpak', 'Isabelle', 'Szpak', 'amor']))

//optional arguments 
function modernGreeting(name: string, greet?: string) {
    if(greet) {
        return `Olá ${greet} ${name} como você esta miLorde?`
    } else {
        return `Olá ${name} suave meu cria?`
    }

}

console.log(modernGreeting('SZPAK', 'Bodybuilder'))
console.log(modernGreeting('rato raquitico'))

