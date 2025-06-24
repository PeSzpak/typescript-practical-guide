import React from 'react';
import FirstComponent from './components/firtsComponent';
import SecondyComponent from './components/secondyComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';

type textOrNull = string | null
type fixed = "Isso" | "ou" | "Aquilo"
function App() {


  //variaveis
  const name: string = "Szpak"
  const age: number = 18
  const isStuding: boolean = true

  const userGreeting = (name: string): string => {
    return `Olá, ${name} `
  }

  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null
  //mySecondText = "opa"

  const testandoFixed: fixed = "Isso"
 // const testandoFixed2: fixed = "Isdsdasasdaso" erro pois só aceita valores ja declarados na tipagem 


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
      <FirstComponent />
      <SecondyComponent name="Segundo" />
      <Destructuring
        title="primeiro post"
        content="Algum conteudo"
        commentsQty={153}
        tags={['ts', 'js']}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Mais Algum conteudo"
        commentsQty={444}
        tags={['python']}
        category={Category.P}
      />
      <State />

      {myText &&
        <p>Tem texto na variavel</p>
      }
      {mySecondText &&
        <p>tem texto na variavel</p>
      }
    </div>
  );
}

export default App;