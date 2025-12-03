const mongoose = require('mongoose') //IMPORTA O MONGOOSE

const Schema = mongoose.Schema; //ATRIBUI O MONGOOSE.SCHEMA(USADO P/ DEFINIR O FORMATO DOS DOCUMENTOS NO BANCO) A VARIAVEL SCHEMA
const ObjectId = Schema.ObjectId; //ATRIBUI O SCHEMA.OBJECTID(USADO PARA DEFINIR IDs ÚNICAS) A VARIAVEL OBJECTID

const UserSchema = new Schema({ //INICIA UM NOVO SCHEMA PARA DEFINIR O FOMATO DO DOCUMENTO
    id: ObjectId,
    name: String,
    email: String,
    age: Number
});

const UserModel = mongoose.model('users', UserSchema); //CRIA A MODEL(COLECAO), PASSANDO DOIS PAREMETROS USERS E USERSCHEMA

//'USERS' → É O NOME DA COLECAO
//USERSCHEMA → É O FORMATO DO DOCUMENTO

module.exports = UserModel //EXPORTA A MODEL(COLECAO)