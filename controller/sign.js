'use strict'
const model = require('../model/sign')
const security = require('../utils/security')

module.exports = {
    signUser: async(req, res) => {
        let payload = req.body
        let user = await model.signUser(payload.login)
        if (!security.compareHash(user.usu_senha, payload.senha)) {
            res.send("Usuario invalido!")
            return
        }
        let jwt = security.tokenSign(formaterUser(user), "segredo")
        res.send({
            token: jwt,
            user_id: user.usu_id_entidade
        })


    }
}

function formaterUser(user) {
    return {
        id: user.usu_id,
        login: user.usu_login
    }
}