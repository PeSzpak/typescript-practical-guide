"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const p = new Pessoa("Pedro", 22);
console.log(p.apresentar());
//============================================================================================
//   Exercício – Herança
//   Crie uma classe Aluno que herda de Pessoa, com:
//   nova propriedade: curso (string)
//   método sobrescrito apresentar() que também diga o curso.
class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    apresentar() {
        return `${super.apresentar()} Estou cursando ${this.curso}`;
    }
}
const p1 = new Aluno("Zéca Urubu", 25, "Maladragem das Ruas");
console.log(p1.apresentar());
//========================================================================================
//   Polimorfismo
// Crie uma classe Funcionario que herda de Pessoa
//  e sobrescreva o método apresentar() para incluir o cargo.
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, empresa) {
        super(nome, idade);
        this.cargo = cargo;
        this.empresa = empresa;
    }
    apresentar() {
        return `${super.apresentar()} E ocupo o cargo:${this.cargo} na empresa ${this.empresa}`;
    }
}
const pedrin = new Funcionario("Tulho maravilha", 32, "Estagiario", "Botafogo");
console.log(pedrin.apresentar()); //mostra o apresentar da classe filha Funcionario
console.log(p.apresentar()); //mostra o apresentar da classe Pai Aluno
console.log(p1.apresentar()); //mostra o apresentar da classe filha aluno
//========================================================================================
