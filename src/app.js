const express = require('express'); //IMPORTA O EXPRESS
const routes = require('./routes') //IMPORTA O ROUTES DE ROUTES.JS

const app = express(); //ATRIBUI O EXPRESS A VARIAVEL APP

app.use(express.json()); //AVISA O EXPRESS QUE UTILIZAREMOS O JSON
app.use(routes);

module.exports = app; //EXPORTA O APP PARA SER UTILIZADO EM OUTRO ARQ.