//console.log("Express + TS")

import express, {Request, Response} from "express";
import { NextFunction } from "express";

const app = express();

app.use(express.json());

function showPath(req: Request, res:Response, next: NextFunction) {
    console.log(req.path)
    next()


}

app.get("/", (req, res) => {
    res.send("Hello Express!");
})

app.post("/api/product", (req, res) => {
    console.log(req.body)

    res.send("Produto adicionado!")
})

app.all("/api/product/check", (req, res) =>{
        if(req.method === "POST") {
            res.send("Inseriu algum registro")
        }else if (req.method === "GET") {
            res.send("leu algum registro!")
        }else {
            res.send("Não podemos realizar esta operação!")
        }
})

app.get("/api/interfaces", (req: Request, res: Response) => {
    res.send("Ultilizando as interfaces")
})

app.get("/api/json", (req: Request, res:Response)=> {
        res.json ({
                name:"Boomber jacket",
                price: 8.999, 
                color: "browm",
                size: ['PP','P','M','G','GG','GG1'],
                inStock: true
        })
})

app.get("/api/product/:id", (req: Request, res:Response) => {
    console.log(req.params)
    const id = req.params.id

    if (id === "1"){
        const product = {
            id: 1,
            name: "Jordan Cap",
            price: 10
        }
        res.json(product)
    }else {
    res.send("Produto não encontrado!")
}
})

app.get("/api/product/:id/review/:reviewId", (req: Request, res:Response) => {
        console.log(req.params)
        const productId = req.params.id
        const reviewId = req.params.reviewId

        res.send(`Acessando a review ${reviewId} do produto ${productId}`)
})

app.get("/api/user/:id", getUser)

function getUser(req: Request, res:Response) {
        console.log(`Resgatando o usuario com id: ${req.params.id}`)
        res.send("O usuario foi encontrado")
}

function checkUser(req: Request, res:Response, next: NextFunction) {
    if(req.params.id === "1" ) {
        console.log("Pode serguir")
        next()
    }else {
        console.log("Acesso Restrito!!!!")
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res:Response) => {

        res.json({msg: "Bem vindo a area admin"})
})

app.get(
    "/api/user/:id/details/:name",
    (req: Request<{id: string, name: string}>,
     res: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)
        res.json({status: true})
    }
)

app.get("/api/error", (req: Request, res:Response) => {
    try{
        throw new Error("Algo deu errado!")
    } catch (e: any) {
        res.statusCode = 500
        res.status(500).json({msg: e.message})
    }
})

app.listen(3000, () => {
    console.log ("Aplicação de TS + express está funcionando!");
})