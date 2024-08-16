import express from "express"

const servidor = express()

servidor.get("/", (requisicao, resposta) => {
    return resposta.send("Olá dev, seja bem vindo! Este é o meu primeiro servidor com Node.js, com express e typescript")
})

servidor.listen(3000)
