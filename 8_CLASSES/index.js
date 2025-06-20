"use strict";
//Class property 
class User {
}
const Pak = new User();
console.log(Pak);
Pak.name = "Pedo Szpak";
console.log(Pak);
// Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Pedro = new NewUser("Pedro Szpak", 18);
console.log(Pedro);
