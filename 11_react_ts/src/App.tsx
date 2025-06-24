import React, { createContext } from 'react';
import FirstComponent from './components/FirtsComponent';
import SecondyComponent from './components/SecondyComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';
//import { createContext } from 'vm';   Usado para rodar codigos n confiaveis.

type textOrNull = string | null
type fixed = "Isso" | "ou" | "Aquilo"

interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

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

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>

        <hr />
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isStuding && (
          <div>
            <p>Está Estudando!</p>
          </div>
        )}
        <hr />

        <h3>{userGreeting(name)}</h3>

        <hr />
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
        <hr />

        <State />

        {myText &&
          <p>Tem texto na variavel</p>
        }
        {mySecondText &&
          <p>tem texto na variavel</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;