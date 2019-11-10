'use strict'
const userModel = require('../model/user')

module.exports = {
    createUserDefault: async(req, res) => {
        //console.log(req.body);
        //res.send("Ok Response 201")

        let userDefault = formatUser(req.body)
        userModel.createUserDefault(userDefault, res)
    },
    getAll: async(req, res) => {

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