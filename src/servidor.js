import express from express

const servidor = express()

servidor.get("/", (requisicao, resposta) => {
    const saudacao = "Olá dev, seja bem vindo! Este é o meu primeiro servidor com Node.js, com express e typescript"
    return resposta.send(saudacao)
})

servidor.listen(3000)
