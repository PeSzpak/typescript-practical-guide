#  TypeScript do Básico ao Avançado (com React e Express)

Este repositório documenta todo o conteúdo estudado no curso da Udemy **"TypeScript do básico ao avançado (com React e Express)"**, com commits organizados por aula e resumos didáticos para revisão e estudo.

> Aprenda TypeScript na prática, integrando com frameworks modernos como React e Express e aplicando tudo em projetos reais.

---

##  Sumário

- [O que é TypeScript?](#o-que-é-typescript)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como rodar os exemplos](#como-rodar-os-exemplos)
- [Fundamentos do TypeScript](#fundamentos-do-typescript)
- [Tipos em TypeScript](#tipos-em-typescript)
- [Funções](#funções)
- [Object Types e Interfaces](#object-types-e-interfaces)
- [Generics e Tipagem Avançada](#generics-e-tipagem-avançada)
- [Classes e POO](#classes-e-poo)
- [Módulos e Importações](#módulos-e-importações)
- [Decorators](#decorators)
- [React com TypeScript](#react-com-typescript)
- [Context API com TypeScript](#context-api-com-typescript)
- [Express com TypeScript e APIs](#express-com-typescript-e-apis)
- [Limitações conhecidas](#limitações-conhecidas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

## O que é TypeScript?

TypeScript é um superset do JavaScript que adiciona **tipagem estática**, **interfaces** e recursos de orientação a objetos, permitindo maior segurança e organização no desenvolvimento.

- Compila para JavaScript
- Detecta erros durante a escrita
- Facilita manutenção e padronização de código

---

## Estrutura do repositório

| Pasta | Conteúdo |
|---|---|
| `1_INTRO` | Primeiro contato: `.ts` compilado para `.js` e carregado no `index.html`, mais o exercício 1 |
| `2_FUNDAMENTOS` | Inferência, annotations, `tsconfig.json`, exercício 2 |
| `3_TIPOS` | Arrays, `any`, parâmetros e retornos tipados, union, type alias × interface, literal types, non-null assertion, `bigint`, `symbol` |
| `4_NARROWING` | Type guards com `typeof`, `instanceof` e operador `in` |
| `5_FUNCOES` | `void`, callbacks, generics e constraints, opcionais/default, `unknown`, `never`, rest e destructuring |
| `6_OBJECT-TYPES` | Interfaces, `readonly`, index signature, extends/intersection, tuplas e arrays readonly |
| `7_CREATING-TYPES` | Generics, type parameters, `keyof`, `typeof`, indexed access, conditional e template literal types |
| `8_CLASSES` | Propriedades, construtor, `readonly`, herança, getters, override, visibilidade, membros estáticos, classes genéricas |
| `9_MODULES` | `export`/`import`, alias, `import type` (vários arquivos) |
| `10_DECORATORS` | Decorators de classe, método, propriedade e accessor |
| `11_react_ts` | App Create React App com TypeScript: componentes, props, `useState`, Context API |
| `12_EXPRESS` | Servidor Express 5 em TypeScript com 11 caminhos (13 combinações método + rota) |
| `13_MODERN-JS` | Revisão de JavaScript moderno (`var`/`let`/`const`, arrow functions etc.) |
| `14-API` | Duas APIs Express em JavaScript: `first-API` e `second-API` |
| `EXC-FIXAÇÃO` | Exercício de fixação de POO (`POO.ts`) |

---

## Como rodar os exemplos

Pré-requisito: Node.js 18+ e TypeScript (`npm install -g typescript`).

**Módulos 1 a 10 e EXC-FIXAÇÃO:** cada pasta tem um `.ts` e o `.js` já compilado. Para recompilar, entre na pasta e rode `tsc index.ts` (ou `tsc` nas pastas com `tsconfig.json`; `tsc -w` recompila a cada alteração). Abra o `index.html` no navegador e veja a saída no console (F12). `13_MODERN-JS` é JavaScript puro, basta abrir o `index.html`.

**11_react_ts:**

```bash
cd 11_react_ts
npm install
npm start        # http://localhost:3000
```

**12_EXPRESS** (porta 3000):

```bash
cd 12_EXPRESS
npm install
npm run dev      # ts-node-dev --respawn src/app.ts
```

**14-API** (porta 3000; rode uma de cada vez):

```bash
cd 14-API/second-API   # ou first-API
npm install
npm start              # nodemon ./index.js
```

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

## Express com TypeScript e APIs

As rotas reais estão documentadas em OpenAPI 3 e numa coleção do Postman:

| Arquivo | Conteúdo |
|---|---|
| [`docs/openapi-12-express.yaml`](docs/openapi-12-express.yaml) | `12_EXPRESS/src/app.ts` |
| [`docs/openapi-14-api.yaml`](docs/openapi-14-api.yaml) | `14-API/first-API` e `14-API/second-API` |
| [`docs/postman/typescript-practical-guide.postman_collection.json`](docs/postman/typescript-practical-guide.postman_collection.json) | Pastas `12_EXPRESS` e `14-API`, variável `baseUrl` = `http://localhost:3000` |

Para ver as specs: cole o arquivo em [editor.swagger.io](https://editor.swagger.io) ou rode `npx @redocly/cli@1.34.3 preview-docs docs/openapi-12-express.yaml`. No Postman: *Import* → selecione o `.json`.

**12_EXPRESS**

| Método | Rota | Resposta |
|---|---|---|
| GET | `/` | `Hello Express!` |
| POST | `/api/product` | Loga o body, responde `Produto adicionado!` |
| GET / POST / outros | `/api/product/check` | `app.all`: texto diferente para GET, POST e demais métodos |
| GET | `/api/interfaces` | Texto (exemplo com `Request`/`Response` tipados) |
| GET | `/api/json` | Produto fixo em JSON |
| GET | `/api/product/:id` | JSON do produto se `id = 1`; senão o texto `Produto não encontrado!` (status 200) |
| GET | `/api/product/:id/review/:reviewId` | Texto com os dois parâmetros |
| GET | `/api/user/:id` | `O usuario foi encontrado` |
| GET | `/api/user/:id/access` | Middleware `checkUser`: só `id = 1` recebe `{"msg":"Bem vindo a area admin"}` |
| GET | `/api/user/:id/details/:name` | `{"status": true}` (generics em `Request<>`/`Response<>`) |
| GET | `/api/error` | 500 `{"msg":"Algo deu errado!"}` |

**14-API/second-API**

| Método | Rota | Resposta |
|---|---|---|
| GET | `/` | 200 `{"message":"Primeira rota criada com sucesso"}` (também em `first-API`) |
| POST | `/createproduct` | 201 com `name`; 422 `{"message":"O campo nome é obrigatorio"}` sem `name` |

```bash
curl -X POST localhost:3000/createproduct -H 'Content-Type: application/json' -d '{"name":"Caneca","price":29.9}'
# {"message":"O produto Caneca foi criado com sucesso"}
```

---

## Limitações conhecidas

- **`GET /api/user/:id/access` nunca responde para `id` diferente de 1.** O middleware `checkUser` só faz `console.log("Acesso Restrito!!!!")`: não chama `next()` nem envia resposta, então o cliente espera até o timeout. O esperado seria algo como `res.status(403).json(...)`.
- `GET /api/product/:id` devolve "Produto não encontrado!" com status 200 em vez de 404.
- `POST /createproduct` sem corpo retorna 500: no Express 5 `req.body` fica `undefined` e `req.body.name` lança `TypeError`.
- A função `showPath` em `12_EXPRESS/src/app.ts` é declarada, mas nunca registrada como middleware.
- `first-API` e `second-API` têm o mesmo `name` (`first-api`) no `package.json`.

---

##  Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)


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
