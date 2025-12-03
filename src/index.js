const app = require('./app'); //IMPORT APP DE APP.JS
const Loaders = require('./loaders') //IMPORTA LOADERS DE INDEX.JS

Loaders.start(); //CHAMA LOADERS.START PARA SER INCIADO JUNTO AO SERVIDOR

app.listen(3002, () => console.log('Server is running!')); //INICIA UM SERVIDOR LOCAL NA PORTA 3002