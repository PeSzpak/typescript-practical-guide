#  TypeScript do Básico ao Avançado (com React e Express)

Este repositório documenta todo o conteúdo estudado no curso da Udemy **"TypeScript do básico ao avançado (com React e Express)"**, com commits organizados por aula e resumos didáticos para revisão e estudo.

> Aprenda TypeScript na prática, integrando com frameworks modernos como React e Express e aplicando tudo em projetos reais.

---

##  Sumário

- [ O que é TypeScript?](#-o-que-é-typescript)
- [ Fundamentos do TypeScript](#-fundamentos-do-typescript)
- [ Tipos em TypeScript](#-tipos-em-typescript)
- [ Funções](#-funções)
- [ Object Types e Interfaces](#-object-types-e-interfaces)
- [ Generics e Tipagem Avançada](#-generics-e-tipagem-avançada)
- [ Classes e Programação Orientada a Objetos](#-classes-e-poo)
- [ Módulos e Importações](#-módulos-e-importações)
- [ Decorators](#-decorators)
- [ React com TypeScript](#-react-com-typescript)
- [ Context API com TypeScript](#-context-api-com-typescript)

---

## O que é TypeScript?

TypeScript é um superset do JavaScript que adiciona **tipagem estática**, **interfaces** e recursos de orientação a objetos, permitindo maior segurança e organização no desenvolvimento.

- Compila para JavaScript
- Detecta erros durante a escrita
- Facilita manutenção e padronização de código

---

##  Fundamentos do TypeScript

- **Inferência de tipos** (`let nome = "Pedro"`)
- **Annotations**: declaração explícita de tipos (`let idade: number = 25`)
- **Compilação automática**: `tsc -w`
- **Configuração via `tsconfig.json`**: `tsc --init`

---

##  Tipos em TypeScript

### Primitivos
- `number`, `string`, `boolean`

### Intermediários
- `any` (evite)
- `unknown` (tipo mais seguro para dados incertos)
- `never` (usado em funções que nunca retornam)

### Estruturais
- `Array<number>`, `string[]`
- `tupla` e `readonly tuples`
- `readonly array`

### Avançados
- `Union Types`: `string | number`
- `Literal Types`: `"ativo" | "inativo"`
- `BigInt`, `Symbol`
- `Enum`

---

##  Funções

- **Parâmetros tipados**: `function saudacao(nome: string): void`
- **Callback Functions** com tipagem
- **Funções anônimas** e validação automática
- **Funções genéricas**: `function ident<T>(valor: T): T`
- **Constraint** para limitar tipos em generics
- **Default e optional parameters**

---

##  Object Types e Interfaces

- **Interfaces** para tipar objetos de forma padronizada
- **Aliases com `type`** para simplificação
- **Optional & readonly properties**
- **Index Signature** para objetos com chaves dinâmicas
- **Extending e Intersection types** para composições
- **Interfaces como parâmetro de função**

---

##  Generics e Tipagem Avançada

- **Generic Constraints** com `extends`
- **Type Parameters** (uso de chaves como tipos)
- **`keyof`, `typeof`, `indexed access types`**
- **Conditional Types**: `T extends U ? X : Y`
- **Template Literal Types**

---

##  Classes e POO

- **Campos e construtores**
- **Getters/Setters**
- **`readonly`, `private`, `protected`, `public`**
- **Herança com `extends` e `super`**
- **Method override**
- **Static Members**
- **Parameter properties**
- **Classes genéricas**
- **Abstract Classes**
- **Class Expressions**
- **Relacionamento entre classes**

---

##  Módulos e Importações

- `export default` e `export named`
- `import`, `import {}` e `import * as`
- **Importando types com `import type`**
- **Alias para facilitar leitura**
- Organização de código modular e reutilizável

---

##  Decorators

- Habilitar no `tsconfig.json` (`experimentalDecorators: true`)
- **Class Decorator**
- **Method Decorator**
- **Property Decorator**
- **Accessor Decorator**
- Uso de `target`, `propertyKey`, `descriptor`
- **Exemplos reais de aplicação prática**
- Ordem de execução (de baixo para cima)

---

##  React com TypeScript

- Setup com `npx create-react-app meuapp --template typescript`
- Tipagem de componentes (`FC`, `Props`)
- Uso do hook `useState` com tipos
- Enumeração e tipagem de estado
- Interfaces para props e estados
- Componentes funcionais com desestruturação
- Organização por pastas e arquivos

---

##  Context API com TypeScript

- **Criação de contextos globais** com `createContext`
- **Tipagem de valores compartilhados**
- **Provedor com `Context.Provider`**
- **Consumo com `useContext`**
- Separação de responsabilidades por camada

---

##  Estrutura do Projeto

```bash
typescript-course/
├── fundamentals/
├── types-functions/
├── interfaces-objects/
├── generics/
├── classes-poo/
├── modules-imports/
├── decorators/
├── react-ts/
└── README.md
```

---

##  Tecnologias Utilizadas

## 🛠️ Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)


---

##  Autor

**Pedro Henrique Szpak Alves**  
 Estudante de Análise e Desenvolvimento de Sistemas  
 [LinkedIn](https://www.linkedin.com/in/pedro-szpak04/)  
 pedrohszpaka@gmail.com

---

##  Observações

Este projeto é um guia de estudos pessoal e prático do curso de TypeScript, organizado por módulos e com versionamento semântico para facilitar revisões, aprendizado e futuras consultas.  
A ideia é manter este repositório atualizado conforme continuo aprendendo!
