const UserModel = require('../Models/UserModel'); //IMPORTA A USERMODEL

class UserController { //INICIA O CONTROLLER

    //--------------------------
    // CRIA USUÁRIO
    //--------------------------

    async create(req, res) {

        const { name, email, age } = req.body

        try {
            if (!name || !email || !age) {
                return res.status(404).json({ message: "Error. All fields are required" });
            } else {
                const createdUser = await UserModel.create(req.body);//ATRIBUI O USER QUE SERA CRIADO NO BANCO A VAR. CREATEDUSER
                return res.status(200).json(createdUser); //RETORNA O RESPONSE COM O CREATEDUSER
            }
        } catch (error) {
            return res.status(404).json({ message: "Error. System failure, please try again later." });
        }
    };

    //--------------------------
    // EXIBE TODOS OS USUÁRIOS
    //--------------------------

    async showAll(req, res) {
        const showAllUsers = await UserModel.find();

        try {
            if (!showAllUsers) {
                return res.status(404).json({ message: "Error. Verify your requisition" });
            } else {
                return res.status(200).json(showAllUsers);
            }
        } catch (error) {
            return res.status(404).json({ message: "Error. System failure, please try again later." });
        }
    };

    //--------------------------
    // EXIBE APENAS UM USUÁRIO
    //--------------------------

    async show(req, res) {
        const { id } = req.params
        const showUser = await UserModel.findById(id);

        try {
            if (!showUser) {
                return res.status(404).json({ message: "Error. User does not exist" });
            } else {
                return res.status(200).json(showUser);
            }
        } catch (error) {
            return res.status(404).json({ message: "Error. System failure, please try again later." });
        }
    };

    //--------------------------
    // ATUALIZA USUÁRIO
    //--------------------------

    async update(req, res) {
        const { id } = req.params
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body);

        try {
            if (!updatedUser) {
                return res.status(404).json({ message: "Error. User does not exist" });
            } else {
                return res.status(200).json({ message: "User successfully updated" });
            }
        } catch (error) {
            return res.status(404).json({ message: "Error. System failure, please try again later" });
        }
    };

    //--------------------------
    // DELETA USUÁRIO
    //--------------------------

    async delete(req, res) {
        const { id } = req.params
        const deleteUser = await UserModel.findByIdAndDelete(id);

        try {
            if (!deleteUser) {
                return res.status(404).json({ message: "Error. User does not exist" });
            } else {
                return res.status(200).json({ message: "User successfully deleted" });
            }
        } catch (error) {
            return res.status(404).json({ message: "Error. System failure, please try again later" });
        }
    };
};

module.exports = new UserController(); //EXPORTA USERCONTROLLER