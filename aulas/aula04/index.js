//constucao minima do express e da API(3 passos)
const express = require('express');

const app = express();

app.use(express.json());

app.use(function(req, res, next){
    console.log("Data: ", new Date());
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    next();
});

//declarar get, post, put e delete na API   req = requisicao    resp = resposta
//middleware de rota 
app.get("/", function(req, res){
    res.status(201).send("Olá!"); //status 200
});

app.post("/", function(req, res){
    console.log(req.body);
    res.status(201).send("Criado com sucesso");
});

app.put("/", function(req, res){
    res.json({status: "200", message: "sucesso"});
});

app.delete("/", function(req, res){
    throw new Expetion();
});

//middleware de erro
app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim")
})

app.listen(3000, function(){
    console.log("API está ON!")
});

module.exports = app;