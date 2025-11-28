import express from 'express' //IMPORTA O EXPRESS

const app = express(); //ATRIBUI O EXPRESS A VARIAVEL APP
app.use(express.json()) //AVISA O EXPRESS QUE UTILIZAREMOS O JSON

let users = []; //SIMULA UM BANCO DE DADOS

//--------------------------------
//------------------------ROTA GET
//--------------------------------

app.get('/usuarios', (req, res) => { //req = requisição - res = response

    res.status(201).json(users); //resposta do servidor
});

//--------------------------------
//------------------------ROTA POST
//--------------------------------

app.post('/usuarios', (req, res) => {

    users.push(req.body);

    res.status(201).json({ message: "Usuário cadastrado!" })
})

app.listen(3002); //SELECIONA UMA PORTA DO PC PARA RODAR O SERVIDOR
