const startDB = require('./mongodb'); //IMPORTA A FUNCAO STARTDB DE MONGODB>JS

class Loaders {
    start() {  //METODO QUE INICIA/EXECUTA TUDO QUE ESTÁ DENTRO
        startDB(); //FUNCAO QUE CONECTA O BANCO
    }
}

module.exports = new Loaders(); //EXPORTA LOADERS