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

//