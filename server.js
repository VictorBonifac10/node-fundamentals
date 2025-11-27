import express from 'express' //IMPORTA O EXPRESS

const app = express(); //ATRIBUI O EXPRESS A VARIAVEL APP
app.use(express.json()) //AVISA O EXPRESS QUE UTILIZAREMOS O JSON

//--------------------------------
//------------------------ROTA GET
//--------------------------------

app.get('/usuarios/:id', (req, res) => { //req = requisição - res = response

    console.log(req);
    res.send('Estamos acessando a rota usuarios!'); //resposta do servidor
});

//--------------------------------
//------------------------ROTA POSTF
//--------------------------------

app.post('/usuarios', (req, res) => {

    console.log(req);
    res.send('Usuário Cadastrado com Sucesso!');
})




app.listen(3002); //SELECIONA UMA PORTA DO PC PARA RODAR O SERVIDOR
