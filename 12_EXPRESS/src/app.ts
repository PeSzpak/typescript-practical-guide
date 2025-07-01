//console.log("Express + TS")

import express, {Request, Response} from "express";

const app = express();

app.use(express.json());
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

app.listen(3000, () => {
    console.log ("Aplicação de TS + express está funcionando!");
})