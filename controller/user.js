'use strict'
const userModel = require('../model/user')

module.exports = {
    createUserDefault: async(req, res) => {
        let userDefault = req.body
        console.log(req.body);
        
        userModel.createUserDefault(userDefault, res)
        res.send("ok response")
    },
    getAll: async(req, res) => {
        console.log("teste");
        res.send("ok")

    },
    nada: async (req, res) => {
        res.send("deu")
    }

}

function formatUser(requestBody) {
    return {
        userName: requestBody.userName,
        userType: requestBody.userType,
        docNumber: requestBody.docNumber,
        address: requestBody.endereco,
        contact: requestBody.contato
    }
}