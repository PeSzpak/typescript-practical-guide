"use strict";
//Void Function 
function withoutReturn() {
    console.log("Esta função não tem Retorno!");
}
withoutReturn();
//Callback Function 
function greeting(name) {
    return `O ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando Função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Szpak ama Bell");
preGreeting(greeting, "Szpak é amado pela Bell");
preGreeting(greeting, "Casal Perfeito");
//
