import React from 'react';

function App() {


//variaveis
const name : string = "Szpak"
const age : number = 18
const isStuding: boolean = true

const userGreeting = (name: string): string => {
  return `Olá, ${name} `
}


  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isStuding && (
        <div>
          <p>Está Estudando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;