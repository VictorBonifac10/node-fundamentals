const { Router } = require('express'); //IMPORTA O ROUTER DO EXPRESS
const UserController = require('./Controllers/UserController')

const routes = Router(); //ATRIBUI ROUTER A VARIAVEL ROUTES

routes.get('/usuarios', (req, res) => { //ROTA GET
    res.status(200).json({ messsage: 'Server is on...' }); //RESPONSE
});

routes.post('/cadastro', UserController.create);
routes.get('/listar', UserController.showAll);
routes.get('/listar/:id', UserController.show);
routes.put('/atualizar/:id', UserController.update);
routes.delete('/deletar/:id', UserController.delete);

module.exports = routes; //EXPORTA ROUTES