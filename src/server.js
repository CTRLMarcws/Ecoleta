const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//configuração de pasta publica (estatica)
server.use(express.static("public"))

server.get("/",(req, res) => {
    return res.render("index.html")
})

server.get("/create-point",(req, res) => {
    return res.render("create-point.html")
})

server.get("/search",(req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)


/*
    nodemon installed as dev dependeces - nunjucks added - routes added - "template engine added"
    __dirname = caminho até o diretorio atual, nesse caso acima, esta retornando "ecoleta/src"
*/