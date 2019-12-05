'use strict'
const userModel = require('../model/user')
const crypt = require('../utils/security')

module.exports = {
    createUserDefault: async(req, res) => {
        let userDefault = req.body
        console.log(userDefault);

        userDefault.senha =  crypt.encrypt(userDefault.senha)
        
        userModel.createUserDefault(userDefault, res)
    },
    getAll: async(req, res) => {
        userModel.getAll(res)
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